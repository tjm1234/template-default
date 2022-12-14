'use strict'

module.exports = function (values) {
  return {
    questions: {
      projectName: {
        type: 'text',
        message: '项目名',
        validate: (answer) => (answer.trim() ? true : '项目名不能为空'),
        initial: 'my-project',
      },
      projectDescription: {
        type: 'text',
        message: '项目描述',
        initial: 'My Awesome Project!',
      },
      needCacher: {
        type: 'toggle',
        message: '需要缓存吗？',
        initial: true,
        active: '是',
        inactive: '否',
      },
      cacher: {
        type: 'select',
        message: '请选择缓存方案',
        choices: [
          { title: 'Memory', value: 'Memory' },
          { title: 'Redis', value: 'Redis' },
        ],
        when(answers) {
          return answers.needCacher
        },
        initial: 1,
      },
      needWebsocket: {
        type: 'toggle',
        message: '需要 websocket 吗?',
        initial: false,
        active: '是',
        inactive: '否',
      },
      needLint: {
        type: 'toggle',
        message: '需要 ESLint 吗?',
        initial: true,
        active: '是',
        inactive: '否',
      },
      needJest: {
        type: 'toggle',
        message: '需要 Jest 吗?',
        initial: true,
        active: '是',
        inactive: '否',
      },
    },
    filters: {
      'channels.ts': 'needWebsocket',
      '.eslintrc.js': 'needLint',
    },
    completeMessage: `
To get started:

	cd {{projectName}}
	npm run dev:h5

		`,
  }
}
