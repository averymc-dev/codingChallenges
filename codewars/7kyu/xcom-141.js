/*[BUG] XCOM-141: Koko gets treats even when she gives a wrong answer

Type: Bug 🐞
Priority: CRITICAL 🚨
Component: Behavioral Training Software
Reporter: cburke
Assignee: Assigned to you
Description of the Bug

The behavioral training software used for Specimen XN-13 ("Koko") incorrectly evaluates enemy identification responses.

Currently, Koko (a xenomorph specimen obtained during an Antarctic mission) is presented with an emoji-based battlefield ("battlescape") and tasked with identifying the position of an enemy combatant. The software then evaluates Koko's answer and applies the appropriate feedback. However, due to a bug, the system always dispenses an acidic treat—regardless of whether Koko’s selection was correct.
Steps to Reproduce

    Present Koko with the following battlescape: 👮🚗👽🏠🚒
    Expect her to identify the enemy combatant (👽) at position 2.
    Observe that regardless of Koko’s response, she receives a treat.
    Koko is now convinced that police officers, fire trucks, and houses are all valid targets.

Expected Behavior

    Koko should only receive a treat when she correctly identifies the enemy at the specified position.
    Incorrect answers should trigger the liquid nitrogen shower, discouraging misidentifications.

Actual Behavior

    Koko always receives a treat.
    Civilian casualties have increased by 300% in simulated environments.

Behavioral Training Software

Important details about the software:

    Positions are 0-based. Fortunately, Koko quickly adapted to this illogical indexing scheme.
    The pictograms used to build the battlescape are single-codepoint emojis—no emoji groups formed with combining characters or ZWJs.

Impact on Experiment

Koko receives positive reinforcement even when she misidentifies a civilian as an enemy. As a result, Koko has begun attacking everything indiscriminately, including unarmed personnel and inanimate objects. Security reports indicate that Koko has started hissing at researchers and attempting to headbutt the touchscreen when experiments are delayed. There have been multiple acid-spitting incidents involving staff. Morale is at an all-time low.*/

function applyFeedback(battlescape, enemy, position) {
  battlescape = [...battlescape]
  if(battlescape[position] == enemy)
    return DISPENSE_TREAT;
  else
    return RELEASE_NITROGEN_SHOWER;
}

applyFeedback("👮🚗👽🏠🚒", "👽", 2) // DISPENSE_TREAT
applyFeedback("👮🚗👽🏠🚒", "👽", 0) // RELEASE_NITROGEN_SHOWER

/*TOP SOLUTION
function applyFeedback(s,e,p){
  return [...s][p]===e ? DISPENSE_TREAT : RELEASE_NITROGEN_SHOWER
}*/