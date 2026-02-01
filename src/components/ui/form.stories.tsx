import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form';
import { Input } from './input';
import { Button } from './button';

const meta = {
  title: 'Components/Forms/Form',
  component: Form,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Wrapper para formulários com validação integrada usando react-hook-form e zod.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'O nome de usuário deve ter pelo menos 2 caracteres.',
  }),
  email: z.string().email({
    message: 'Digite um email válido.',
  }),
});

export const Default: Story = {
  render: () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: '',
        email: '',
      },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
      alert('Formulário enviado! Veja o console.');
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[300px]">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome de usuário</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu nome" {...field} />
                </FormControl>
                <FormDescription>
                  Este será seu nome público.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </Form>
    );
  },
};
