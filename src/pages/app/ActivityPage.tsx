import React from 'react';
import { useApp } from '../../context/AppContext';
import { ActivityTimeline } from '../../components/app/ActivityTimeline';

export const ActivityPage: React.FC = () => {
  const { activity } = useApp();
  return <ActivityTimeline activity={activity} />;
};
