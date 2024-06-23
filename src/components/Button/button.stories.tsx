import Button from "./button.component";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
    argTypes: {
        asChild: {
            control: { type: "boolean", disable: true },
            name: "asChild",
            description:
                "В случае, если есть ребенок, которому нужно передать все стили и dom ветку",
            table: { defaultValue: { summary: "false" } },
            type: "boolean",
        },
        variant: {
            control: { presetColors: true, labels: false, type: "select" },
            description: "Тип кнопки для последующего определения стилей",
            type: "string",
            table: { defaultValue: { summary: "default" } },
            options: [
                "default",
                "primary",
                "destructive",
                "secondary",
                "outline",
                "success",
                "ghost",
                "link",
                "icon",
            ],
        },
        size: {
            description: "Размер кнопки",
            control: { type: "select" },
            table: { defaultValue: { summary: "default" } },
            options: ["default", "sm", "md", "lg", "icon"],
            type: "string",
        },
    },
    tags: ["components", "button"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    name: "Button-Primary",
    args: {
        variant: "primary",
        children: "hello",
    },
};

export const Secondary: Story = {
    name: "Button-Secondary",
    args: {
        variant: "secondary",
        children: "hello",
    },
};

export const Ghost: Story = {
    name: "Button-Ghost",
    args: {
        variant: "ghost",
        children: "Ghost-Button",
    },
};

export const Outline: Story = {
    name: "Outline-Ghost",
    args: {
        variant: "outline",
        children: "Outline-Button",
    },
};

export const Success: Story = {
    name: "Success-Ghost",
    args: {
        variant: "success",
        children: "Success-Button",
    },
};

export const Destructive: Story = {
    name: "Destructive-Ghost",
    args: {
        variant: "destructive",
        children: "Destructive-Button",
    },
};

export const Link: Story = {
    name: "Link-Ghost",
    args: {
        variant: "link",
        children: "Link-Button",
    },
};
