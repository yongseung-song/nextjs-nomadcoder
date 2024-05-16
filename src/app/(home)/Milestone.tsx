'use client';

export default function Milestone(props: { milestone: Response }) {
  return <div dangerouslySetInnerHTML={{ __html: props.milestone }} />;
}
