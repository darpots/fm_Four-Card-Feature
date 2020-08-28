import teamBuilderIcon from './images/icon-team-builder.svg'
import calculatorIcon from './images/icon-calculator.svg'
import karmaIcon from './images/icon-karma.svg'
import supervisorIcon from './images/icon-supervisor.svg'

export const CardData = [
  {
    title: 'Supervisor',
    text: 'Monitors activity to identify project roadblocks',
    border: 'cyan',
    icon: supervisorIcon,
    location: 'first',
  },
  {
    title: 'Team Builder',
    text:
      'Scans our talent network to create the optimal team for your project',
    border: 'red',
    icon: teamBuilderIcon,
    location: 'second',
  },
  {
    title: 'Karma',
    text: 'Regularly evaluates our talent to ensure quality',
    border: 'orange',
    icon: karmaIcon,
    location: 'third',
  },
  {
    title: 'Calculator',
    text: 'Uses data from past projects to provide better delivery estimates',
    border: 'blue',
    icon: calculatorIcon,
    location: 'fourth',
  },
]
