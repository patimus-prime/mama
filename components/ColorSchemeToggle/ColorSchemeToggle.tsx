import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" >
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="xl"
        sx={(theme) => ({
          backgroundColor:
            // theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            `rgba(0, 0, 0, 0)`, // Transparent background
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
          // outline: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6]}`,
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: theme.colorScheme == 'dark' ? theme.colors.dark[6] : theme.colors.gray[0], //ttheme.colors.gray[0], // Gray-ish background on hover
          },
        })}
      >
        {colorScheme === 'dark' ? (
          <IconSun size={20} stroke={1.5} />
        ) : (
          <IconMoonStars size={20} stroke={1.5} />
        )}
      </ActionIcon>
    </Group>
  );
}
