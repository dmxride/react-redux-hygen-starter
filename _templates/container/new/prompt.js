const fs = require('fs');
let isShared = false;

module.exports = {
  prompt: ({ prompter, args }) => {
    return prompter
      .prompt([
        {
          type: 'toggle',
          name: 'shared',
          message: 'Is it shared? (y/n)',
        },
      ])
      .then(({ shared }) => {
        isShared = shared;

        let prompt = [
          {
            type: 'input',
            name: 'name',
            message: "What's your container's name?",
          },
          {
            type: 'toggle',
            name: 'logic',
            message: 'Will there be logic? (y/n)',
          },
          {
            type: 'input',
            name: 'author',
            message: "What's your name?",
          },
          {
            type: 'input',
            name: 'email',
            message: "What's your email?",
          },
        ];

        if (!shared) {
          prompt.unshift({
            type: 'select',
            name: 'folder',
            message: 'Belongs to which Scene?',
            choices: fs.readdirSync(__dirname + '/../../../src/scenes'),
          });
        }

        return prompter.prompt(prompt).then(({ shared, folder, ...props }) => ({
          ...props,
          shared: isShared ? true : false,
          folder: folder ? folder : '',
        }));
      });
  },
};
