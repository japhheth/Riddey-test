export const getProgressInPercentage = (progress: number, limit: number) => {
  let progressInPercentage = 0;
  if (
    progress === undefined ||
    progress === null ||
    limit === undefined ||
    limit === null
  )
    return;

  if (progress === 0) {
    return `${progressInPercentage}`;
  }

  progressInPercentage = (progress / limit) * 100;

  return `${progressInPercentage}%`;
};
