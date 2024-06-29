import { View, Text, Image } from "react-native";
import React from "react";

const VideoCard = ({ video: { title, creator, avatar, thumbnail, video } }) => {
  return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5"></View>
          <Image
            source={{ uri: avatar }}
            className="w-full h-full rounded-lg"
          />
        </View>
      </View>
      <View className="justify-center flex-1 ml-3 gap-y-1">
        <text className="text-white font-psemibold text-sm" numberOfLines={1}>
          {title}
        </text>
        <Text className="text-2xl text-white">{creator}</Text>
      </View>
    </View>
  );
};

export default VideoCard;
