const sageAccordion = `
    <div class="accordion accordion-flush" id="sageTable">
        <div class="accordion-item">
            <h2 class="accordion-header" id="sageTraits">
            <h2 class="text-center">Sage</h2>
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSageTraits" aria-expanded="false"
                    aria-controls="flush-collapseSageTraits">
                    Traits
                </button>
            </h2>
            <div id="flush-collapseSageTraits" class="accordion-collapse collapse"
                aria-labelledby="sageTraits">
                <div class="accordion-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Type</th>
                                <th scope="col">I</th>
                                <th scope="col">II</th>
                                <th scope="col">III</th>
                                <th scope="col">IV</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Proficiency</th>
                                <td>
                                    <b>Spread</b>
                                    <br> 
                                    +10% Area (Main Weapon) +10% Range (Main Weapon) +10% Force (Main Weapon) 
                                    <br>
                                    <br> 
                                    <b>Strengthen</b>
                                    <br> 
                                    +0.1 Base Crit Chance
                                    (Abilities)
                                </td>
                                <td>
                                    <b>Spread</b> 
                                    <br>
                                    +10% Area (Main Weapon) +10% Range (Main Weapon)
                                    +10% Force (Main Weapon)
                                    <br>
                                    <br>
                                    <b>Strengthen</b>
                                    <br>
                                     +0.1 Base Crit Chance (Abilities)
                                </td>
                                <td>
                                    <b>Spread</b> 
                                    <br>
                                     +10% Area (Main Weapon) +10% Range (Main Weapon)
                                    +10%
                                    Force (Main Weapon) 
                                    <br>
                                    <br>
                                    <b>Strengthen</b>
                                    <br>
                                     +0.1 Base Crit Chance
                                    (Abilities)
                                </td>
                                <td>
                                    <b>Spread</b> 
                                    <br>
                                    +20% Area (Main Weapon) +20% Range (Main Weapon)
                                    +20%
                                    Force (Main Weapon) 
                                    <br>
                                    <br>
                                    <b> Strengthen </b>
                                    <br> +15 Base Damage
                                    (Abilities)
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Stance</th>
                                <td>
                                    <b>Concentration</b>
                                    <br>
                                    +50% Damage (Abilities)-25% Attack Speed
                                    (Abilities)-25% Movement Speed (Abilities)
                                    <br>
                                    <br>
                                    <b>Elements</b>
                                    <br>+20%
                                    Elemental Effect Chance (Main Weapon)
                                </td>
                                <td>
                                    <b>Concentration</b>
                                    <br>+50% Crit Chance (Abilities)-10% Attack Speed
                                    (Abilities)-20% Force (Abilities)
                                    <br>
                                    <br>
                                    <b>Elements</b>
                                    <br>
                                    +20% Elemental
                                    Effect
                                    Chance (Main Weapon)
                                </td>
                                <td>
                                    <b>Concentration</b>
                                    <br>
                                    +50% Crit Bonus (Abilities)-25% Area
                                    (Abilities)-25% Range (Abilities)
                                    <br>
                                    <br>
                                    <b>Elements</b>
                                    <br>+20% Elemental
                                    Effect
                                    Chance (Main Weapon)
                                </td>
                                <td>
                                    <b>Concentration</b>
                                    <br>
                                    +75% Damage (Abilities)-25% Multistrike
                                    (Abilities)
                                    <br>
                                    <br>
                                    <b>Elements</b>
                                    <br>
                                    +40% Elemental Effect Chance (Main
                                    Weapon)
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Dedication</th>
                                <td>
                                    <b>Focus Mind</b>
                                    <br>
                                    +10% Damage (Main Weapon) +10% Force (Main
                                    Weapon)
                                    <br>
                                    <br>
                                    <b>Open Mind</b>
                                    <br>
                                    +1.0m Base Pickup Rang+3% Experience Gain
                                </td>
                                <td>
                                    <b>Focus Mind</b> 
                                    <br>
                                    +10% Damage (Main Weapon)+10% Force (Main Weapon)
                                    <br>
                                    <br>
                                    <b>Open Mind</b>
                                    <br>
                                    +0.5m Base Pickup Rang+5% Experience Gain
                                </td>
                                <td>
                                    <b>Focus Mind</b>
                                    <br>
                                    +10% Damage (Main Weapon)+10% Force (Main Weapon)
                                    <br>
                                    <br>
                                    <b>Open Mind</b>
                                    <br>
                                    +7% Experience Gain
                                </td>
                                <td>
                                    <b>Focus Mind</b> 
                                    <br>
                                    +20% Damage (Main Weapon)+20% Force (Main Weapon)
                                    <br>
                                    <br>
                                    <b>Open Mind</b>+10% Experience Gain
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="sageBase">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-sageBase" aria-expanded="false"
                        aria-controls="flush-sageBase">
                        Base Stats
                    </button>
                </h2>
                <div id="flush-sageBase" class="accordion-collapse collapse" aria-labelledby="sageBase">
                    <div class="accordion-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Defensive</th>
                                    <th scope="col">Weak traits</th>
                                    <th scope="col">Misc</th>
                                    <th scope="col">Level Up Bonuses</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">Max HP: 250</td>
                                    <td>Vitality (Health)</td>
                                    <td>Movement Speed: 4.5m/s</td>
                                    <td>
                                        <b>Per Level</b>
                                        <br>
                                        Pickup Range +1%
                                        <br>
                                        Damage +1%
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">Health Regeneration: 0.0/s</td>
                                    <td>Metabolism (Health Regeneration)</td>
                                    <td>Pickup Range: 2.5m</td>

                                </tr>
                                <tr>
                                    <td scope="row">Defense: 0</td>
                                    <td>Parry (Block Strength)</td>
                                    <td>XP Gain: 100%</td>
                                </tr>
                                <tr>
                                    <td scope="row">Block Strength: 0</td>
                                    <td>Thick Hide (Defense)</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>

    `;

    const beastAccordion = `<div class="accordion accordion-flush" id="beastTable">
    <div class="accordion-item">
    <h2 class="text-center">Beast Huntress</h2>
        <h2 class="accordion-header" id="beastTraits">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseBeastTraits" aria-expanded="false"
                aria-controls="flush-collapseBeastTraits">
                Traits
            </button>
        </h2>
        <div id="flush-collapseBeastTraits" class="accordion-collapse collapse"
            aria-labelledby="beastTraits">
            <div class="accordion-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">I</th>
                            <th scope="col">II</th>
                            <th scope="col">III</th>
                            <th scope="col">IV</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Proficiency</th>
                            <td>
                                <b>Frost Bite</b>
                                <br> 
                                +15% Damage (Ice) 
                                <br>
                                <br>
                                <b>Piercing</b>
                                <br> 
                                +0.05 Base Crit Chance (Main Weapon) +15% Crit Bonus (Main Weapon)
                            </td>
                            <td>
                                <b>Frost Bite</b>
                                <br> 
                                +15% Damage (Ice) 
                                <br>
                                <br>
                                <b>Piercing</b>
                                <br> 
                                +0.05 Base Crit Chance (Main Weapon) +15% Crit Bonus (Main Weapon)
                            </td>
                            <td>
                                <b>Frost Bite</b>
                                <br> 
                                +15% Damage (Ice)
                                <br>
                                <br>
                                <b>Piercing</b>
                                <br> 
                                +0.05 Base Crit Chance (Main Weapon) +15% Crit Bonus (Main Weapon)
                            </td>
                            <td>
                                <b>Frost Bite</b>
                                <br> 
                                +30% Frost Damage 
                                <br>
                                <br>
                                <b>Piercing</b>
                                <br> 
                                +0.10 Base Crit Chance (Main Weapon) +30% Crit Bonus (Main Weapon) 
                                <br>
                                <br>
                                <b>Throat Clamp</b>
                                <br> 
                                +0.20 Base Crit Bonus (Hound)
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Stance</th>
                            <td>
                                <b>Blizzard</b>
                                <br> 
                                +20% Frost Chance 
                                <br>
                                <br>
                                <b>Power</b>
                                <br> 
                                +20% Damage (Main Weapon)
                            </td>
                            <td>
                                <b>Blizzard</b>
                                <br> 
                                +20% Frost Chance 
                                <br>
                                <br>
                                <b>Power</b>
                                <br> 
                                +20% Damage (Main Weapon)
                            </td>
                            <td>
                                <b>Blizzard</b>
                                <br> 
                                +20% Frost Chance 
                                <br>
                                <br>
                                <b>Power</b>
                                <br> 
                                +20% Damage (Main Weapon)
                            </td>
                            <td>
                                <b>Blizzard</b>
                                <br> 
                                +40% Frost Chance 
                                <br>
                                <br>
                                <b>Power</b>
                                <br> 
                                +40% Damage (Main Weapon) 
                                <br>
                                <br>
                                <b>Wild Hound</b>
                                <br> 
                                +100% Attackspeed (Hound) +40% Area (Hound) +150 Base Damage (Hound)
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Dedication</th>
                            <td>
                                <b>Flight</b>
                                <br> 
                                +15% Force (Main Weapon) +3 Base Defense 
                                <br>
                                <br>
                                <b>Flight</b>
                                <br> 
                                +9% Movement Speed +50 Base Health
                            </td>
                            <td>
                                <b>Fight</b>
                                <br> 
                                +15% Force (Main Weapon) +50 Base Health 
                                <br>
                                <br>
                                <b>Flight</b>
                                <br> 
                                +9% Movement Speed +0.25/s Base Regeneration
                            </td>
                            <td>
                                <b>Fight</b>
                                <br> 
                                +15% Force (Main Weapon) +3 Base Defense 
                                <br>
                                <br>
                                <b>Flight</b>
                                <br> 
                                +9% Movement Speed +50 Base Health
                            </td>
                            <td>
                                <b>Fight</b>
                                <br> 
                                +15% Force (Main Weapon) +50 Base Health 
                                <br>
                                <br>
                                <b>Flight</b>
                                <br> 
                                +9% Movement Speed +0.25/s Base Regeneration
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header" id="beastBase">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseBeastBase" aria-expanded="false"
                    aria-controls="flush-collapseBeastBase">
                    Base Stats
                </button>
            </h2>
            <div id="flush-collapseBeastBase" class="accordion-collapse collapse" aria-labelledby="beastBase">
                <div class="accordion-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Defensive</th>
                                <th scope="col">Weak traits</th>
                                <th scope="col">Misc</th>
                                <th scope="col">Level Up Bonuses</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">Max HP: 250</td>
                                <td>Vitality (Health)</td>
                                <td>Movement Speed: 4.5m/s</td>
                                <td>
                                    <b>Per Level</b>
                                    <br>
                                    Pickup Range +1%
                                    <br>
                                    Damage +1%
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">Health Regeneration: 0.0/s</td>
                                <td>Metabolism (Health Regeneration)</td>
                                <td>Pickup Range: 2.5m</td>
                            </tr>
                            <tr>
                                <td scope="row">Defense: 0</td>
                                <td>Parry (Block Strength)</td>
                                <td>XP Gain: 100%</td>
                            </tr>
                            <tr>
                                <td scope="row">Block Strength: 0</td>
                                <td>Thick Hide (Defense)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</div>
`;
