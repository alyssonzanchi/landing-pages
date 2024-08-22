import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Voluptatibus esse molestiae unde. 
    Architecto numquam saepe dolorum nihil nobis officiis ipsa iusto. 
    Suscipit quos voluptatem quod ab commodi eos nam atque.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
