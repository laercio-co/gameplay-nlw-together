import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 102,
    height: 118,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: theme.colors.secondary40,
    paddingVertical: 7,
  },
  checked: {
    width: 8,
    height: 8,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-end',
    marginRight: 7,
    borderRadius: 2,
  },
  check: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.secondary100,
    alignSelf: 'flex-end',
    marginRight: 7,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 2,
  },
  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 15,
  },
});
