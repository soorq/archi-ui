import type { Meta, StoryObj } from "@storybook/react";
import Text from "./text.component";

const meta: Meta<typeof Text> = {
    title: "Text",
    component: Text,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        as: {
            control: { type: "select" },
            description:
                "Выбор тега, для описания предустановленными стилями, а также семантически",
            type: "string",
            table: {
                defaultValue: { summary: "span" },
            },
            options: ["h1", "h2", "h3", "h4", "h5", "h6", "span", "p"],
        },
        size: {
            control: { type: "select" },
            description: "Выбор размера шрифта для тега",
            table: {
                defaultValue: { summary: "base" },
            },
            type: "string",
            options: ["sm", "base", "lg", "xl", "2xl", "3xl"],
        },
        weight: {
            control: { type: "select" },
            description: "Выбор жироность шрифта для элемента",
            table: {
                defaultValue: { summary: "normal" },
            },
            type: "string",
            options: ["thin", "normal", "medium", "semibold", "bold", "black"],
        },
        align: {
            control: { type: "select" },
            description: "Выбор расположения элемента",
            type: "string",
            table: {
                defaultValue: { summary: "left" },
            },
            options: ["left", "center", "right", "justify"],
        },
        italic: {
            control: { type: "boolean" },
            defaultValue: false,
            description: "Стиль шрифта курсивный",
            table: {
                defaultValue: { summary: "false" },
            },
            type: "boolean",
        },
        underline: {
            control: { type: "boolean" },
            defaultValue: false,
            description: "Нижнее подчеркивание",
            table: {
                defaultValue: { summary: "false" },
            },
            type: "boolean",
        },
        emphasis: {
            control: { type: "select" },
            defaultValue: "low",
            description: "Акцентирование",
            type: "string",
            table: {
                defaultValue: { summary: "low" },
            },
            options: ["low"],
        },
    },
    tags: ["components", "text", "autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        as: "h1",
        children:
            "be parts correct potatoes sides donkey extra climate happily freedom relationship tape unit tall hung call cat window steady world front graph particular pick",
    },
};
