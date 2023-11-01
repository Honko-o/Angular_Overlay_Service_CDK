import type { Meta, StoryObj } from '@storybook/angular';
import {ButtonComponent} from "./button.component";
import {componentWrapperDecorator, moduleMetadata} from "@storybook/angular";
import {AngularSvgIconModule, SvgIconRegistryService} from "angular-svg-icon";
import {HttpClientModule} from "@angular/common/http";

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator((story) => `<div style="margin: 3em; padding: 5rem; background: white">${story}</div>`),
    moduleMetadata({
      providers: [SvgIconRegistryService],
      imports: [AngularSvgIconModule.forRoot(), HttpClientModule]
    })
  ],
  render: (args: ButtonComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Default: Story = {
  args: {
    type: 'default',
    disabled: false,
    text: 'Batee5',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Outline: Story = {
  args: {
    ...Default.args,
    type: 'outlined',
  },
};

export const OutlineDisabled: Story = {
  args: {
    ...Disabled.args,
    type: 'outlined',
  },
};

export const Link: Story = {
  args: {
    type: 'link',
    disabled: false,
    text: 'batee5',
  },
};
export const LinkDisabled: Story = {
  args: {
    ...Link.args,
    disabled: true,
  },
};

export const ButtonWithLeftIcon: Story = {
  args: {
    ...Default.args,
    leftIconPath: 'http://localhost:4200/assets/icons/add.svg'
  }
}

export const ButtonWithRightIcon: Story = {
  args: {
    ...Default.args,
    rightIconPath: 'http://localhost:4200/assets/icons/add.svg'
  }
}

export const ButtonWithBothIcons: Story = {
  args: {
    ...Default.args,
    ...ButtonWithLeftIcon.args,
    ...ButtonWithRightIcon.args
  }
}
