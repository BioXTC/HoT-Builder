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
                                    <h3>Spread</h3> +10% Area (Main Weapon) +10% Range (Main Weapon)
                                    +10%
                                    Force (Main Weapon) <h3> Strengthen </h3> +0.1 Base Crit Chance
                                    (Abilities)
                                </td>
                                <td>
                                    <h3>Spread</h3> +10% Area (Main Weapon) +10% Range (Main Weapon)
                                    +10%
                                    Force (Main Weapon) <h3> Strengthen </h3> +0.1 Base Crit Chance
                                    (Abilities)
                                </td>
                                <td>
                                    <h3>Spread</h3> +10% Area (Main Weapon) +10% Range (Main Weapon)
                                    +10%
                                    Force (Main Weapon) <h3> Strengthen </h3> +0.1 Base Crit Chance
                                    (Abilities)
                                </td>
                                <td>
                                    <h3>Spread</h3> +20% Area (Main Weapon) +20% Range (Main Weapon)
                                    +20%
                                    Force (Main Weapon) <h3> Strengthen </h3> +15 Base Damage
                                    (Abilities)
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Stance</th>
                                <td>
                                    <h3>Concentration</h3>+50% Damage (Abilities)-25% Attack Speed
                                    (Abilities)-25% Movement Speed (Abilities)<h3>Elements</h3>+20%
                                    Elemental Effect Chance (Main Weapon)
                                </td>
                                <td>
                                    <h3>Concentration</h3>+50% Crit Chance (Abilities)-10% Attack Speed
                                    (Abilities)-20% Force (Abilities)<h3>Elements</h3>+20% Elemental
                                    Effect
                                    Chance (Main Weapon)
                                </td>
                                <td>
                                    <h3>Concentration</h3>+50% Crit Bonus (Abilities)-25% Area
                                    (Abilities)-25% Range (Abilities)<h3>Elements</h3>+20% Elemental
                                    Effect
                                    Chance (Main Weapon)
                                </td>
                                <td>
                                    <h3>Concentration</h3>+75% Damage (Abilities)-25% Multistrike
                                    (Abilities)<h3>Elements</h3>+40% Elemental Effect Chance (Main
                                    Weapon)
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Dedication</th>
                                <td>
                                    <h3>Focus Mind</h3>+10% Damage (Main Weapon) +10% Force (Main
                                    Weapon)
                                    <h3>Open Mind</h3>+1.0m Base Pickup Rang+3% Experience Gain
                                </td>
                                <td>
                                    <h3>Focus Mind</h3>+10% Damage (Main Weapon)+10% Force (Main Weapon)
                                    <h3>
                                        Open Mind</h3>+0.5m Base Pickup Rang+5% Experience Gain
                                </td>
                                <td>
                                    <h3>Focus Mind</h3>+10% Damage (Main Weapon)+10% Force (Main Weapon)
                                    <h3>
                                        Open Mind</h3>+7% Experience Gain
                                </td>
                                <td>
                                    <h3>Focus Mind</h3>+20% Damage (Main Weapon)+20% Force (Main Weapon)
                                    <h3>
                                        Open Mind</h3>+10% Experience Gain
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
                                        <h3>Per Level</h3>
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
                                <h3>Frost Bite</h3> +15% Damage (Ice) <h3>Piercing</h3> +0.05 Base Crit Chance (Main Weapon) +15% Crit Bonus (Main Weapon)
                            </td>
                            <td>
                                <h3>Frost Bite</h3> +15% Damage (Ice) <h3>Piercing</h3> +0.05 Base Crit Chance (Main Weapon) +15% Crit Bonus (Main Weapon)
                            </td>
                            <td>
                                <h3>Frost Bite</h3> +15% Damage (Ice) <h3>Piercing</h3> +0.05 Base Crit Chance (Main Weapon) +15% Crit Bonus (Main Weapon)
                            </td>
                            <td>
                            <h3>Frost Bite</h3> +30% Frost Damage <h3>Piercing</h3> +0.10 Base Crit Chance (Main Weapon) +30% Crit Bonus (Main Weapon) <h3>Throat Clamp</h3> +0.20 Base Crit Bonus (Hound)
                        </tr>
                        <tr>
                            <th scope="row">Stance</th>
                            <td>
                            <h3>Blizzard</h3> +20% Frost Chance <h3>Power</h3> +20% Damage (Main Weapon)
                            </td>
                            <td>
                            <h3>Blizzard</h3> +20% Frost Chance <h3>Power</h3> +20% Damage (Main Weapon)
                            </td>
                            <td>
                            <h3>Blizzard</h3> +20% Frost Chance <h3>Power</h3> +20% Damage (Main Weapon)
                            </td>
                            <td>
                            <h3>Blizzard</h3> +40% Frost Chance <h3>Power</h3> +40% Damage (Main Weapon) <h3>Wild Hound</h3> +100% Attackspeed (Hound) +40% Area (Hound) +150 Base Damage (Hound)
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Dedication</th>
                            <td>
                            <h3>Flight</h3> +15% Force (Main Weapon) +3 Base Defense <h3>Flight</h3> +9% Movement Speed +50 Base Health
                            </td>
                            <td>
                            <h3>Fight</h3> +15% Force (Main Weapon) +50 Base Health <h3>Flight</h3> +9% Movement Speed +0.25/s Base Regeneration
                            </td>
                            <td>
                            <h3>Fight</h3> +15% Force (Main Weapon) +3 Base Defense <h3>Flight</h3> +9% Movement Speed +50 Base Health
                            </td>
                            <td>
                            <h3>Fight</h3> +15% Force (Main Weapon) +50 Base Health <h3>Flight</h3> +9% Movement Speed +0.25/s Base Regeneration
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
                                    <h3>Per Level</h3>
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