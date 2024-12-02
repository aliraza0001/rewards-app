import React, {memo} from 'react';
import {Text, View, Image, LayoutChangeEvent} from 'react-native';
import {RewardData} from '@app/types/data/rewards';
import styles from './reward-card.style';
import CustomButton from '../common/Button';

type RewardCardProps = {
  item: RewardData;
  onCollect?: (id: string) => void | undefined;
  isCollected?: boolean;
  onLayout?: (event: LayoutChangeEvent) => void;
};

const RewardCard: React.FC<RewardCardProps> = memo(
  ({item, onCollect, isCollected, onLayout}) => {
    const renderImages = () => {
      return item.pictures
        .slice(0, 4) //render only first 4 images
        .map((img_src, index) => (
          <Image
            key={img_src.order}
            source={{uri: img_src.image}}
            style={styles.image}
            resizeMode="cover"
          />
        ));
    };

    return (
      <View
        onLayout={onLayout}
        style={[styles.card, isCollected && styles.collectedCard]}>
        <View style={styles.imageContainer}>{renderImages()}</View>
        <View style={styles.contentContainer}>
          <Text style={styles.name} numberOfLines={2}>
            {item.name}
          </Text>
          <Text style={styles.description} numberOfLines={3}>
            {item.description}
          </Text>
          <Text style={styles.points}>
            {item.needed_points} points need to collect
          </Text>
          {!isCollected && (
            <CustomButton
              title="Collect"
              onPress={() => onCollect?.(item.id)}
            />
          )}
        </View>
      </View>
    );
  },
);

export default RewardCard;
