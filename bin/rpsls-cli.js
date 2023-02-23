#!/usr/bin/env node

import { rpsls } from "../lib/rpsls.js"

function print_usage() {
    console.log(
        `Usage: node-rpsls [SHOT]
        Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
        
          -h, --help        display this help message and exit
          -r, --rules       display the rules and exit
        
        Examples:
          node-rpsls        Return JSON with single player RPSLS result.
                            e.g. {"player":"rock"}
          node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                            e.g {"player":"rock","opponent":"Spock","result":"lose"}`
    )
}

function print_rules() {
    console.log(
        `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock SMOOSHES Lizard
        - Lizard POISONS Spock
        - Spock SMASHES Scissors
        - Scissors DECAPITATES Lizard
        - Lizard EATS Paper
        - Paper DISPROVES Spock
        - Spock VAPORIZES Rock
        - Rock CRUSHES Scissors`
    )
}

// Get args
const [,, ...args] = process.argv

let player = null

// Parse args
for(let i = 0; i < args.length; i++) {
    switch(args[i]) {
        case "-h":
        case "--help":
            print_usage()
            process.exit(0) 
        case "-r":
        case "--rules":
            print_rules()
            process.exit(0)
    }
}

if(args.length > 0) {
    player = args[0]
}

let result = rpsls(player)
if(result == null) {
    // out of range
    print_usage()
    print_rules()
} else {
    console.log(JSON.stringify(result))
}