import { View, Text, Image } from "react-native";
import { React, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons } from "../constants";

const VideoCard = ({ video: { title, creator, avatar, thumbnail, video } }) => {
  const [play, setplay] = useState(false);
  return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5"></View>
          <Image
            source={{ uri: avatar }}
            className="w-full h-full rounded-lg"
            resizeMode="cover"
          />
        </View>
        <View className="justify-center flex-1 ml-3 gap-y-1">
          <text className="text-white font-psemibold text-sm" numberOfLines={1}>
            {title}
          </text>
          <Text className="text-xs text-gray-100 font-pregular">{creator}</Text>
        </View>
      </View>
      <View className="pt-2">
        <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
      </View>
      {play ? (
        <Text className="text-white">Playing</Text>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setplay(true)}
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            classNmae="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
