export const getProgressInPercentage = (progress: number, limit: number) => {
  let progressInPercentage = 0;
  if (
    progress === undefined ||
    progress === null ||
    limit === undefined ||
    limit === null
  )
    return;

  if (limit > 0) {
    // Check if progress is greater than limit or percentage is 0
    if (progress === 0 || progress > limit) {
      return progressInPercentage;
    }

    progressInPercentage = (progress / limit) * 100;
  }

  return `${progressInPercentage}%`;
};
