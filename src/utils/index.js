export const getSlidesCount = (topics) => {
  let count = 0;

  for (let i = 0; i < topics.length; i++) {
    count = count + topics[i].screens.length;
  }
  return count;
};

export const getCurrentSlideNumber = (topics, topic, lesson) => {
  let currentCount = 0;
  for (let i = 0; i < topics.length; i++) {
    const screens = topics[i].screens;
    for (let j = 0; j < screens.length; j++) {
      if (i === topic && j === lesson) return currentCount + 1;
      currentCount++;
    }
  }
};

export const getNextSlideCount = (topics, topic, lesson) => {
  const totalTopics = topics.length;
  const lessonsInCurrentTopic = topics[topic].screens.length;

  if (lesson + 1 < lessonsInCurrentTopic) {
    return {
      topic: topic,
      lesson: lesson + 1,
    };
  }
  if (lesson + 1 === lessonsInCurrentTopic && topic + 1 <= totalTopics) {
    return {
      topic: topic + 1,
      lesson: 0,
    };
  }
};

export const getBackSlideCount = (topics, topic, lesson) => {
  if (lesson > 0 && topic >= 0) {
    return {
      topic: topic,
      lesson: lesson - 1,
    };
  }
  if (lesson === 0 && topic > 0) {
    return {
      topic: topic - 1,
      lesson: topics[topic - 1].screens.length - 1,
    };
  }
};
