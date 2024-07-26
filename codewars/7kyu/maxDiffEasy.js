/*You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

    lst contains integers, that means it may contain some negative numbers
    if lst is empty or contains a single element, return 0
    lst is not sorted

[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

Have fun!
*/

function maxDiff(list){
  if(list.length > 1){
    return Math.max(...list) - Math.min(...list);
  }
  return 0
}

maxDiff([0, 1, 2, 3, 4, 5, 6]) // 6
maxDiff([]) // 0
maxDiff([16]) // 0
maxDiff([-899, -540, -412, -944, -305, -17, -298, -680, -302, -528, -833, -334, -767, -907, -992, -642, -499, -918, -609, -686, -160, -624, -93, -39, -750, -374, -384, -337, -71, -486, -434, -761, -313, -233, -947, -707, -607, -827, -620, -920, -151, -692, -478, -892, -137, -742, -442, -863, -507, -713, -435, -950, -68, -347, -883, -939, -404, -393, -38, -533, -391, -512, -134, -391, -1, -694, -45, -717, -993, -430, -441, -743, -138, -434, -965, -891, -430, -396, -726, -846, -705, -863, -990, -290, -204, -971, -172, -152, -120, -697, -275, -442, -870, -465, -601, -558, -119, -324, -315, -909, -945, -170, -206, -698, -624, -601, -294, -891, -104, -704, -72, -234, -763, -367, -554, -220, -43, -484, -315, -16, -97, -106, -133, -334, -365, -635, -56, -669, -216, -794, -229, -713, -610, -702, -890, -270, -259, -586, -585, -974, -540, -87, -654, -244, -479, -561, -906, -843, -437, -716, -219, -520, -788, -572, -997, -433, -952, -436, -588, -886, -322, -839, -367, -946, -23, -421, -849, -3, -181, -354, -621, -189, -823, -451, -936, -576, -960, -145, -669, -185, -501, -240, -52, -925, -910, -881, -156, -550, -330, -877, -192, -139, -908, -404, -455, -634, -647, -29, -127, -239, -513, -656, -404, -881, -72, -427, -539, -575, -313, -382, -892, -46, -309, -8, -85, -605, -855, -951, -984, -141, -141, -484, -537, -239, -485, -669, -760, -971, -938, -715, -183, -858, -375, -759, -127, -800, -104, -577, -780, -500, -637, -264, -616, -385, -67, -491, -7, -254, -33, -395, -500, -887, -510, -813, -382, -543, -701, -366, -563, -144, -269, -14, -906, -286, -939, -23, -918, -762, -179, -743, -229, -659, -465, -166, -889, -169, -143, -341, -471, -382, -273, -724, -297, -298, -149, -983, -977, -165, -203, -954, -624, -675, -778, -331, -778, -275, -758, -424, -746, -474, -169, -446, -536, -138, -372, -657, -661, -632, -16, -547, -271, -152, -296, -30, -267, -647, -502, -437, -442, -350, -424, -880, -968, -185, -707, -85, -269, -734, -669, -406, -912, -706, -468, -806, -315, -361, -29, -318, -558, -716, -339, -14, -418, -582, -195, -829, -4, -249, -543, -694, -844, -708, -759, -628, -454, -4, -466, -565, -240, -150, -989, -613, -106, -255, -40, -775, -870, -170, -123, -440, -973, -763, -499, -305, -439, -741, -635, -913, -141, -828, -315, -782, -35, -531, -869, -88, -206, -842, -563, -412, -628, -651, -222, -107, -117, -401, -535, -704, -229, -328, -337, -125, -674, -558, -288, -635, -235, -97, -359, -802, -502, -462, -380, -921, -632, -305, -689, -257, -911, -85, -103, -631, -573, -880, -917, -785, -842, -44, -876, -231, -930, -942, -930, -223, -430, -805, -41, -642, -515, -503, -296, -601, -840, -608, -835, -362, -189, -684, -534, -14, -64, -500, -174, -245, -865, -438, -911, -220, -777, -44, -600, -684, -598, -939, -823, -351, -649, -305, -495, -823, -458, -347, -277, -235, -972, -240, -732, -235, -954, -943, -434, -840, -808, -362, -79, -510, -933, -305, -29, -425]) // 996