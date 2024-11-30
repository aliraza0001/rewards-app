import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {RewardData} from '@app/types/data/rewards';
import styles from './reward-item.style';

type RewardItemProps = {
  item: RewardData;
  onCollect: (id: string) => void;
};

const RewardItem: React.FC<RewardItemProps> = ({item, onCollect}) => {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.pointsText}>
          Points needed: {item.needed_points}
        </Text>
      </View>

      <View style={styles.contentContainer}>
        {Boolean(item.pictures.length) && (
          <View style={styles.imageContainer}>
            {item.pictures.slice(0, 2).map((img_src, index) => (
              <Image
                key={index}
                source={{uri: img_src.image}}
                style={styles.image}
              />
            ))}
          </View>
        )}
        <Pressable
          style={styles.collectButton}
          onPress={() => onCollect(item.id)}>
          <Text style={styles.collectButtonText}>Collect</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RewardItem;