
import React from 'react';
import {
  UserCircleIcon as HeroUserCircleIcon,
  PlayCircleIcon as HeroPlayCircleIcon,
  ChevronDownIcon as HeroChevronDownIcon,
  PencilSquareIcon as HeroPencilSquareIcon,
  SparklesIcon as HeroSparklesIcon,
  RadioIcon as HeroRadioIcon,
  WifiIcon as HeroWifiIcon,
  PlayIcon as HeroPlayIcon,
  StopCircleIcon as HeroStopCircleIcon,
  ArrowPathIcon as HeroArrowPathIcon,
  DocumentTextIcon as HeroDocumentTextIcon,
  BookOpenIcon as HeroBookOpenIcon,
  BoltIcon as HeroBoltIcon,
  XCircleIcon as HeroXCircleIcon,
  ChatBubbleBottomCenterTextIcon as HeroChatBubbleBottomCenterTextIcon, // Added
  LightBulbIcon as HeroLightBulbIcon, // Added for AI suggestions
} from '@heroicons/react/24/outline';

interface IconProps {
  className?: string;
}

export const UserIcon: React.FC<IconProps> = ({ className }) => <HeroUserCircleIcon className={className} />;
export const PlayCircleIcon: React.FC<IconProps> = ({ className }) => <HeroPlayCircleIcon className={className} />;
export const ChevronDownIcon: React.FC<IconProps> = ({ className }) => <HeroChevronDownIcon className={className} />;
export const Edit3Icon: React.FC<IconProps> = ({ className }) => <HeroPencilSquareIcon className={className} />;
export const Wand2Icon: React.FC<IconProps> = ({ className }) => <HeroSparklesIcon className={className} />; // Used for AI Antidote Suggestion
export const RadioIcon: React.FC<IconProps> = ({ className }) => <HeroRadioIcon className={className} />;
export const BroadcastIcon: React.FC<IconProps> = ({ className }) => <HeroWifiIcon className={className} />;
export const PlayIcon: React.FC<IconProps> = ({ className }) => <HeroPlayIcon className={className} />;
export const StopCircleIcon: React.FC<IconProps> = ({ className }) => <HeroStopCircleIcon className={className} />;
export const RefreshCwIcon: React.FC<IconProps> = ({ className }) => <HeroArrowPathIcon className={className} />;
export const FileTextIcon: React.FC<IconProps> = ({ className }) => <HeroDocumentTextIcon className={className} />;
export const LibraryIcon: React.FC<IconProps> = ({ className }) => <HeroBookOpenIcon className={className} />;
export const ZapIcon: React.FC<IconProps> = ({ className }) => <HeroBoltIcon className={className} />;
export const XCircleIcon: React.FC<IconProps> = ({ className }) => <HeroXCircleIcon className={className} />;
export const ChatIcon: React.FC<IconProps> = ({ className }) => <HeroChatBubbleBottomCenterTextIcon className={className} />; // Added
export const LightBulbIcon: React.FC<IconProps> = ({ className }) => <HeroLightBulbIcon className={className} />;


export const Flower2Icon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2zm-3-3h2v2h-2zm0 3h2v2h-2zm6-3h2v2h-2zm0 3h2v2h-2z"/>
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
    <path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5S13.38 14.5 12 14.5 9.5 13.38 9.5 12 10.62 9.5 12 9.5zm0 0"/>
  </svg>
);

// Helper to create a consistent icon structure for the app
export const AppIcons = {
    UserIcon: (props: IconProps) => <HeroUserCircleIcon {...props} />,
    PlayCircleIcon: (props: IconProps) => <HeroPlayCircleIcon {...props} />,
    ChevronDownIcon: (props: IconProps) => <HeroChevronDownIcon {...props} />,
    Edit3Icon: (props: IconProps) => <HeroPencilSquareIcon {...props} />,
    Wand2Icon: (props: IconProps) => <HeroSparklesIcon {...props} />, // For AI Antidote
    RadioIcon: (props: IconProps) => <HeroRadioIcon {...props} />,
    BroadcastIcon: (props: IconProps) => <HeroWifiIcon {...props} />,
    PlayIcon: (props: IconProps) => <HeroPlayIcon {...props} />,
    StopCircleIcon: (props: IconProps) => <HeroStopCircleIcon {...props} />,
    RefreshCwIcon: (props: IconProps) => <HeroArrowPathIcon {...props} />,
    FileTextIcon: (props: IconProps) => <HeroDocumentTextIcon {...props} />,
    LibraryIcon: (props: IconProps) => <HeroBookOpenIcon {...props} />,
    Flower2Icon: Flower2Icon,
    ZapIcon: (props: IconProps) => <HeroBoltIcon {...props} />,
    XCircleIcon: (props: IconProps) => <HeroXCircleIcon {...props} />,
    ChatIcon: (props: IconProps) => <HeroChatBubbleBottomCenterTextIcon {...props} />, // For AI Affirmation
    LightBulbIcon: (props: IconProps) => <HeroLightBulbIcon {...props} />, // Alternative for AI suggestions
};
