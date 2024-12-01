import React, {memo} from 'react';
import {Text, View, Image} from 'react-native';
import {RewardData} from '@app/types/data/rewards';
import styles from './reward-card.style';
import CustomButton from '../common/Button';

type RewardCardProps = {
  item: RewardData;
  onCollect?: (id: string) => void | undefined;
  isCollected?: boolean;
};

const RewardCard: React.FC<RewardCardProps> = memo(
  ({item, onCollect, isCollected}) => {
    return (
      <View
        style={[
          styles.listItemContainer,
          isCollected && styles.selectedReward,
        ]}>
        <View style={styles.textContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.pointsText}>
            Points needed: {item.needed_points}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          {Boolean(item.pictures.length) && (
            <View style={styles.imageContainer}>
              {item.pictures.slice(0, 2).map(img_src => (
                <Image
                  key={img_src.order}
                  source={{uri: img_src.image}}
                  style={styles.image}
                />
              ))}
            </View>
          )}
          {!isCollected && (
            <CustomButton
              buttonStyle={styles.collectButton}
              onPress={() => onCollect?.(item.id)}
              title="Collect"
            />
          )}
        </View>
      </View>
    );
  },
);

export default RewardCard;
