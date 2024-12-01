import {
  Colors,
  createStyleSheet,
  Layout,
  Spacing,
  Typography,
} from '@app/theme';

const styles = createStyleSheet({
  listItemContainer: {
    flexDirection: Layout.flexDirection.column,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    marginVertical: Spacing.md,
    borderRadius: 10,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    minHeight: 150,
    justifyContent: Layout.justifyContent.center,
  },
  textContainer: {
    marginBottom: Spacing.sm,
  },
  itemName: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.bold as any,
    color: Colors.text,
  },
  pointsText: {
    fontSize: Typography.fontSizes.base,
    color: Colors.gray,
  },
  contentContainer: {
    flexDirection: Layout.flexDirection.row,
    justifyContent: Layout.justifyContent.between,
    alignItems: Layout.alignItems.center,
    width: '100%',
  },
  collectButton: {
    backgroundColor: Colors.success,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: 8,
    justifyContent: Layout.justifyContent.center,
    alignItems: Layout.alignItems.center,
  },
  collectButtonText: {
    color: Colors.white,
    fontSize: Typography.fontSizes.base,
    fontWeight: Typography.fontWeights.bold as any,
  },
  imageContainer: {
    flexDirection: Layout.flexDirection.row,
    justifyContent: Layout.justifyContent.end,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginLeft: Spacing.sm,
    borderWidth: 1,
    borderColor: '#ddd',
  } as const,
  selectedReward: {
    backgroundColor: "#eeeeee",
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 8,
    opacity: 0.5,
  },
});

export default styles;
