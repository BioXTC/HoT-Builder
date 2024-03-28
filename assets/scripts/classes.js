const sageAccordion = `
    <div class="accordion" id="sageTable">
        <div class="accordion-item">
            <h2 class="accordion-header" id="sageTraits">
            <h1 class="text-center metal-mania-regular">SAGE</h1>
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
                                    +10% Area (MW) 
                                    <br>
                                    +10% Range (MW)
                                    <br> 
                                    +10% Force (MW) 
                                    <br>
                                    <b>Strengthen</b>
                                    +0.1 Base Crit Chance (A)
                                </td>
                                <td>
                                    <b>Spread</b>
                                    +10% Area (MW) 
                                    <br>
                                    +10% Range (MW)
                                    <br>
                                    +10% Force (MW)
                                    <br>
                                    <br>
                                    <b>Strengthen</b>
                                   
                                     +0.1 Base Crit Chance (A)
                                </td>
                                <td>
                                    <b>Spread</b>
                                     +10% Area (MW) 
                                     <br>
                                     +10% Range (MW)
                                     <br>
                                     +10% Force (MW) 
                                    <br>
                                    <br>
                                    <b>Strengthen</b>
                                    +0.1 Base Crit Chance
                                    (A)
                                </td>
                                <td>
                                    <b>Spread</b>
                                    +20% Area (MW) 
                                    <br>
                                    +20% Range (MW)
                                    <br>
                                    +20% Force (MW) 
                                    <br>
                                    <br>
                                    <b> Strengthen </b>
                                   +15 Base Damage
                                    (A)
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Stance</th>
                                <td>
                                    <b>Concentration</b>
                                    +50% Damage (A)
                                    <br>
                                    -25% Attack Speed (A)
                                    <br>
                                    -25% Movement Speed (A)
                                    <br>
                                    <br>
                                    <b>Elements</b>
                                    +20%
                                    Elemental Effect Chance (MW)
                                </td>
                                <td>
                                    <b>Concentration</b>
                                   +50% Crit Chance (A)
                                   <br>
                                   -10% Attack Speed (A)
                                    <br>
                                    -20% Force (A)
                                    <br>
                                    <br>
                                    <b>Elements</b>
                                    +20% Elemental Effect Chance (MW)
                                </td>
                                <td>
                                    <b>Concentration</b>
                                    +50% Crit Bonus (A)
                                    <br>
                                    -25% Area (A)
                                    <br>
                                    -25% Range (A)
                                    <br>
                                    <br>
                                    <b>Elements</b>
                                    +20% Elemental Effect Chance (MW)
                                </td>
                                <td>
                                    <b>Concentration</b>
                                    +75% Damage (A)
                                    <br>
                                    -25% Multistrike (A)
                                    <br>
                                    <br>
                                    <b>Elements</b>
                                    +40% Elemental Effect Chance (MW)
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Dedication</th>
                                <td>
                                    <b>Focus Mind</b>
                                   +10% Damage (MW) 
                                   <br>
                                   +10% Force (MW)
                                    <br>
                                    <br>
                                    <b>Open Mind</b>
                                    +1.0m Base Pickup Range
                                    <br>
                                    +3% Experience Gain
                                </td>
                                <td>
                                    <b>Focus Mind</b> 
                                    +10% Damage (MW)
                                    <br>
                                    +10% Force (MW)
                                    <br>
                                    <br>
                                    <b>Open Mind</b>
                                    +0.5m Base Pickup Range
                                    <br>
                                    +5% Experience Gain
                                </td>
                                <td>
                                    <b>Focus Mind</b>
                                    +10% Damage (MW)
                                    <br>
                                    +10% Force (MW)
                                    <br>
                                    <br>
                                    <b>Open Mind</b>
                                    +7% Experience Gain
                                </td>
                                <td>
                                    <b>Focus Mind</b>
                                    +20% Damage (MW)
                                    <br>
                                    +20% Force (MW)
                                    <br>
                                    <br>
                                    <b>Open Mind</b>
                                    +10% Experience Gain
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

const beastAccordion = `
<div class="accordion" id="beastTable">
    <div class="accordion-item">
    
        <h2 class="accordion-header" id="beastTraits"><h1 class="text-center metal-mania-regular">Beast Huntress</h1>
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
                                +15% Damage (Ice)
                                <br>
                                <br>
                                <b>Piercing</b>
                                +0.05 Base Crit Chance (MW) 
                                <br>
                                +15% Crit Bonus (MW)
                            </td>
                            <td>
                                <b>Frost Bite</b>
                                +15% Damage (Ice) 
                                <br>
                                <br>
                                <b>Piercing</b>
                                +0.05 Base Crit Chance (MW) +15% Crit Bonus (MW)
                            </td>
                            <td>
                                <b>Frost Bite</b>
                                +15% Damage (Ice)
                                <br>
                                <br>
                                <b>Piercing</b>
                                +0.05 Base Crit Chance (MW) +15% Crit Bonus (MW)
                            </td>
                            <td>
                                <b>Frost Bite</b>
                                +30% Frost Damage 
                                <br>
                                <br>
                                <b>Piercing</b>
                                +0.10 Base Crit Chance (MW)
                                <br>
                                +30% Crit Bonus (MW) 
                                <br>
                                <br>
                                <b>Throat Clamp</b>
                                +0.20 Base Crit Bonus (Hound)
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Stance</th>
                            <td>
                                <b>Blizzard</b>
                                +20% Frost Chance 
                                <br>
                                <br>
                                <b>Power</b>
                                +20% Damage (MW)
                            </td>
                            <td>
                                <b>Blizzard</b>
                                +20% Frost Chance 
                                <br>
                                <br>
                                <b>Power</b>
                                +20% Damage (MW)
                            </td>
                            <td>
                                <b>Blizzard</b>
                                +20% Frost Chance 
                                <br>
                                <br>
                                <b>Power</b>
                                +20% Damage (MW)
                            </td>
                            <td>
                                <b>Blizzard</b>
                                +40% Frost Chance 
                                <br>
                                <br>
                                <b>Power</b>
                                +40% Damage (MW) 
                                <br>
                                <br>
                                <b>Wild Hound</b>
                                +100% Attackspeed (Hound) 
                                <br>
                                +40% Area (Hound) 
                                <br>
                                +150 Base Damage (Hound)
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Dedication</th>
                            <td>
                                <b>Flight</b>
                                +15% Force (MW) +3 Base Defense 
                                <br>
                                <br>
                                <b>Flight</b>
                                +9% Movement Speed +50 Base Health
                            </td>
                            <td>
                                <b>Fight</b>
                                +15% Force (MW) +50 Base Health 
                                <br>
                                <br>
                                <b>Flight</b>
                                +9% Movement Speed +0.25/s Base Regeneration
                            </td>
                            <td>
                                <b>Fight</b>
                                +15% Force (MW) +3 Base Defense 
                                <br>
                                <br>
                                <b>Flight</b>
                                +9% Movement Speed 
                                <br>
                                +50 Base Health
                            </td>
                            <td>
                                <b>Fight</b>
                                +15% Force (MW) +50 Base Health 
                                <br>
                                <br>
                                <b>Flight</b>
                                +9% Movement Speed 
                                <br>
                                +0.25/s Base Regeneration
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
