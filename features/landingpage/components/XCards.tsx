import ShimmerText from "@/components/kokonutui/shimmer-text";
import SocialButton from "@/components/kokonutui/social-button";
import TweetCard from "@/components/kokonutui/tweet-card";
import React from "react";

const XCards = () => {
  return (
    <div
      style={{
        background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
      }}
      className=" flex flex-col ">
      <div className=" flex justify-center mt-30 ">
        <ShimmerText className=' text-6xl' text={"MY TWEETS"} />
      </div>
      <div className=" h-[50vh] items-center w-full flex justify-evenly">
        <TweetCard
          authorName={"Nithin"}
          authorHandle={"Nithin165568"}
          authorImage={
            "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          }
          reply={{
            authorName: "Friend",
            authorHandle: "friend_handle",
            authorImage:
              "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
            content: "Great thought!",
            isVerified: false,
            timestamp: "Jan 29, 2026",
          }}
          content={["Add your first tweet here! 🚀"]}
          timestamp={"Jan 29, 2026"}
        />
        <TweetCard
          authorName={"Nithin"}
          authorHandle={"Nithin165568"}
          reply={{
            authorName: "Friend",
            authorHandle: "friend_handle",
            authorImage:
              "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
            content: "Keep going!",
            isVerified: false,
            timestamp: "Jan 29, 2026",
          }}
          authorImage={
            "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          }
          content={["Add your second tweet here! 💡"]}
          timestamp={"Jan 29, 2026"}
        />
      </div>
      <div className=" p-10 flex justify-center ">
        <SocialButton />
      </div>
    </div>
  );
};

export default XCards;
