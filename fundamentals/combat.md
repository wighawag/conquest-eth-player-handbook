# Combat

In conquest.eth Combat happen when a fleet arrived at an enemy (or virgin) planets

It involves the number of spaceships of the fleet, the attack stats of the planet the fleet is coming from, the number of spaceships on the planet being attacked, its defense stats but also a global parameter (the sizeFactor)

Let name these as follow:

* numAttack = number of spaceships in the fleet
* attack = the attack value of the planet the fleet is coming from
* numDefense = number of spaceships on the planet at the time the fleet arrive
* defense = the defense value of the planet being attacked
* sizeFactor = extra contribution based on number of spaceship, the more spaceships the more your attack/defense is stronger, it is equal to 0.5 currently

The result of the combat is as follow:

```
uint256 attackFactor = numAttack * ((1000000 - _fleetSizeFactor6) + (_fleetSizeFactor6 * numAttack / numDefense));
uint256 attackDamage = (attackFactor * attack) / defense / 1000000;

if (numDefense > attackDamage) {
    // attack fails
    attackerLoss = uint32(numAttack); // all attack destroyed
    defenderLoss = uint32(attackDamage); // 1 spaceship will be left at least as attackDamage < numDefense
} else {
    // attack succeed
    uint256 defenseFactor = numDefense * ((1000000 - _fleetSizeFactor6) + (_fleetSizeFactor6 * numDefense / numAttack));
    uint256 defenseDamage = uint32((defenseFactor * defense) / attack / 1000000);

    if (defenseDamage >= numAttack) {
        defenseDamage = numAttack - 1; // ensure 1 spaceship left
    }

    attackerLoss = uint32(defenseDamage);
    defenderLoss = uint32(numDefense); // all defense destroyed
}
```

In english term in means that the number of spaceships that the fleet remove from the destination planet is equal to the "number of effective spaceships" in the fleet multiplied by the ratio between the attack and the defense. so with an attack stat of 8000 vs an attack stats of 4000, the attack will make twice as more damage compared to the case where attack and defense stats where equal.

Now the "number of effective spaceship" (called "attackFactor" in the code above) is actually half the number of spaceships and half the square of the number of spaceships dividier by the number of defense spaceships. (sizeFactor = 0.5)

If the resulting number of spaceship to remove is not sufficient to destroy all spaceships on the defending planet, then the attack fails and the attacker fleet is destroyed, while the number of spaceships is reduced to that amount.

If on the other hand there is no more spaceships left, the attack succeed and we go on calculating how many spaceships of the fleets were destroyed using the same mechanism above but replacing the defense values with that of the attacker and vice-versa

