/**
 * This is the main entry point for the whois CLI.
 * It prints the profile of kkeeth to the console.
 *
 * @module
 */

/**
 * Prints the profile.
 */
function printProfile(): void {
  const green = '\x1b[32m';
  const reset = '\x1b[0m';

  const lines = [
    "@ysknsid25 / Kanon",
    "Maintainer of Type Challenges. I love Hono and UnJS.",
    "𝕏:  https://x.com/ysknsid25",
    "GitHub:  https://github.com/ysknsid25",
    "Tech Blog:  https://blog.inorinrinrin.com",
    "Please follow me and subscribe my blog!!",
  ];

  // Calculate the maximum content width, excluding the border characters and ANSI codes
  // The original box width is 81 characters for the content part (excluding '╭' and '╮')
  const boxContentWidth = 81;

  const formattedLines = lines.map(line => {
    const textLength = [...line].length;
    const paddingNeeded = boxContentWidth - textLength;
    const leftPadding = Math.floor(paddingNeeded / 2);
    const rightPadding = paddingNeeded - leftPadding;
    return ' '.repeat(leftPadding) + line + ' '.repeat(rightPadding);
  });

  const profile = `

   ${green}╭─────────────────────────────────────────────────────────────────────────────────╮${reset}
   ${green}│${reset}                                                                                 ${green}│${reset}
   ${green}│${reset}${formattedLines[0]}${green}│${reset}
   ${green}│${reset}                                                                                 ${green}│${reset}
   ${green}│${reset}${formattedLines[1]}${green}│${reset}
   ${green}│${reset}                                                                                 ${green}│${reset}
   ${green}│${reset}${formattedLines[2]}${green}│${reset}
   ${green}│${reset}${formattedLines[3]}${green}│${reset}
   ${green}│${reset}${formattedLines[4]}${green}│${reset}
   ${green}│${reset}                                                                                 ${green}│${reset}
   ${green}│${reset}${formattedLines[5]}${green}│${reset}
   ${green}│${reset}                                                                                 ${green}│${reset}
   ${green}╰─────────────────────────────────────────────────────────────────────────────────╯${reset}

`;
  console.log(profile);
}

if (import.meta.main) {
  printProfile();
}