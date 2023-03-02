// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise

const hero = (bullets, dragons) => {
    const num = bullets / dragons
    return num >= 2
    /* if(num>=2){
        return true
    }else{return false} */
}

hero(24,2)
hero(24,14)
hero(360, 54)