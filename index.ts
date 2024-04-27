#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from 'inquirer';

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};

async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('\n🌟🌟🌟 Welcome to Typescript World of Colors 🌟🌟🌟');

    await sleep();
    rainbowTitle.stop();

}
await welcome();

function rainbowText(text: any) {
    const rainbowColors = [
        chalk.red.bold.italic,
        chalk.yellow.bold.italic,
        chalk.green.bold.italic,
        chalk.blue.bold.italic,
        chalk.magenta.bold.italic,
        chalk.cyan.bold.italic
    ];

    let coloredText = '';
    for (let i = 0; i < text.length; i++) {
        const color = rainbowColors[i % rainbowColors.length];
        coloredText += color(text[i]);
    }
    return coloredText;
}

const currentDateTime = new Date();
const currentDate = currentDateTime.toLocaleDateString();
const currentTime = currentDateTime.toLocaleTimeString();

console.log(rainbowText(`\nDate: ${currentDate} & Time: ${currentTime}`));
console.log();

console.log(chalk.yellowBright.italic.bold.underline("\n🟠🟢🔵  Countdown Timer 🔵🟢🟠\n"));


async function countdownTimer(): Promise<void> {
    let duration: number | undefined;
    while (isNaN(duration as number) || duration === undefined) {
        const { inputDuration } = await inquirer.prompt([
            {
                type: 'input',
                name: 'inputDuration',
                message: (chalk.rgb(255, 0, 255).italic.bold.underline('Enter the time duration of the countdown in seconds:')),
                validate: (input: any) => {
                    if (/^\d+$/.test(input)) {
                        return true;
                    } else {
                        return (chalk.blueBright.italic.bold('\nPlease press delete & re-enter only numerical digits for the time duration.'));
                    }
                }
            }
        ]);

        duration = parseInt(inputDuration);
    }
    
    console.log(chalk.rgb(255, 195, 0).italic.bold("\nPlease keep eye on counter to see when it will stop."));
    function printElapsedSeconds() {
    }
    let secondsLeft = duration;
    const intervalId = setInterval(() => {
        secondsLeft--;

        if (secondsLeft <= 0) {
            clearInterval(intervalId);
            console.log(chalk.rgb(76, 187, 23).italic.bold('\nCountdown timer has stopped successfully!! Thank you for using it, Please try once again.\nAuthor: Azmat Ali"'));
        } else {
            console.log(chalk.whiteBright.italic.bold(`\nTime left: ${secondsLeft} seconds`));
        }
    }, 1000);
}

countdownTimer();