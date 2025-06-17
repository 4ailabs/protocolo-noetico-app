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
  ChatBubbleBottomCenterTextIcon as HeroChatBubbleBottomCenterTextIcon,
  LightBulbIcon as HeroLightBulbIcon,
  HeartIcon as HeroHeartIcon,
  SunIcon as HeroSunIcon,
  MoonIcon as HeroMoonIcon,
  StarIcon as HeroStarIcon,
  FireIcon as HeroFireIcon,
  EyeIcon as HeroEyeIcon,
  ClockIcon as HeroClockIcon,
  CalendarIcon as HeroCalendarIcon,
  PlusIcon as HeroPlusIcon,
  MinusIcon as HeroMinusIcon,
  CheckIcon as HeroCheckIcon,
  ExclamationTriangleIcon as HeroExclamationTriangleIcon,
  InformationCircleIcon as HeroInformationCircleIcon,
  CogIcon as HeroCogIcon,
  HomeIcon as HeroHomeIcon,
  MagnifyingGlassIcon as HeroMagnifyingGlassIcon,
  TrashIcon as HeroTrashIcon,
  ArrowUpIcon as HeroArrowUpIcon,
  ArrowDownIcon as HeroArrowDownIcon,
  ArrowLeftIcon as HeroArrowLeftIcon,
  ArrowRightIcon as HeroArrowRightIcon,
} from '@heroicons/react/24/outline';

interface IconProps {
  className?: string;
}

export const UserIcon: React.FC<IconProps> = ({ className }) => <HeroUserCircleIcon className={className} />;
export const PlayCircleIcon: React.FC<IconProps> = ({ className }) => <HeroPlayCircleIcon className={className} />;
export const ChevronDownIcon: React.FC<IconProps> = ({ className }) => <HeroChevronDownIcon className={className} />;
export const Edit3Icon: React.FC<IconProps> = ({ className }) => <HeroPencilSquareIcon className={className} />;
export const Wand2Icon: React.FC<IconProps> = ({ className }) => <HeroSparklesIcon className={className} />;
export const RadioIcon: React.FC<IconProps> = ({ className }) => <HeroRadioIcon className={className} />;
export const BroadcastIcon: React.FC<IconProps> = ({ className }) => <HeroWifiIcon className={className} />;
export const PlayIcon: React.FC<IconProps> = ({ className }) => <HeroPlayIcon className={className} />;
export const StopCircleIcon: React.FC<IconProps> = ({ className }) => <HeroStopCircleIcon className={className} />;
export const RefreshCwIcon: React.FC<IconProps> = ({ className }) => <HeroArrowPathIcon className={className} />;
export const FileTextIcon: React.FC<IconProps> = ({ className }) => <HeroDocumentTextIcon className={className} />;
export const LibraryIcon: React.FC<IconProps> = ({ className }) => <HeroBookOpenIcon className={className} />;
export const ZapIcon: React.FC<IconProps> = ({ className }) => <HeroBoltIcon className={className} />;
export const XCircleIcon: React.FC<IconProps> = ({ className }) => <HeroXCircleIcon className={className} />;
export const ChatIcon: React.FC<IconProps> = ({ className }) => <HeroChatBubbleBottomCenterTextIcon className={className} />;
export const LightBulbIcon: React.FC<IconProps> = ({ className }) => <HeroLightBulbIcon className={className} />;

export const HeartIcon: React.FC<IconProps> = ({ className }) => <HeroHeartIcon className={className} />;
export const SunIcon: React.FC<IconProps> = ({ className }) => <HeroSunIcon className={className} />;
export const MoonIcon: React.FC<IconProps> = ({ className }) => <HeroMoonIcon className={className} />;
export const StarIcon: React.FC<IconProps> = ({ className }) => <HeroStarIcon className={className} />;
export const FireIcon: React.FC<IconProps> = ({ className }) => <HeroFireIcon className={className} />;
export const EyeIcon: React.FC<IconProps> = ({ className }) => <HeroEyeIcon className={className} />;
export const ClockIcon: React.FC<IconProps> = ({ className }) => <HeroClockIcon className={className} />;
export const CalendarIcon: React.FC<IconProps> = ({ className }) => <HeroCalendarIcon className={className} />;
export const PlusIcon: React.FC<IconProps> = ({ className }) => <HeroPlusIcon className={className} />;
export const MinusIcon: React.FC<IconProps> = ({ className }) => <HeroMinusIcon className={className} />;
export const CheckIcon: React.FC<IconProps> = ({ className }) => <HeroCheckIcon className={className} />;
export const WarningIcon: React.FC<IconProps> = ({ className }) => <HeroExclamationTriangleIcon className={className} />;
export const InfoIcon: React.FC<IconProps> = ({ className }) => <HeroInformationCircleIcon className={className} />;
export const SettingsIcon: React.FC<IconProps> = ({ className }) => <HeroCogIcon className={className} />;
export const HomeIcon: React.FC<IconProps> = ({ className }) => <HeroHomeIcon className={className} />;
export const SearchIcon: React.FC<IconProps> = ({ className }) => <HeroMagnifyingGlassIcon className={className} />;
export const TrashIcon: React.FC<IconProps> = ({ className }) => <HeroTrashIcon className={className} />;
export const ArrowUpIcon: React.FC<IconProps> = ({ className }) => <HeroArrowUpIcon className={className} />;
export const ArrowDownIcon: React.FC<IconProps> = ({ className }) => <HeroArrowDownIcon className={className} />;
export const ArrowLeftIcon: React.FC<IconProps> = ({ className }) => <HeroArrowLeftIcon className={className} />;
export const ArrowRightIcon: React.FC<IconProps> = ({ className }) => <HeroArrowRightIcon className={className} />;

export const Flower2Icon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2zm-3-3h2v2h-2zm0 3h2v2h-2zm6-3h2v2h-2zm0 3h2v2h-2z"/>
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
    <path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5S13.38 14.5 12 14.5 9.5 13.38 9.5 12 10.62 9.5 12 9.5zm0 0"/>
  </svg>
);

export const EnergyIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
    <path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18Z"/>
  </svg>
);

export const ChakraIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20Z"/>
    <path d="M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12S9.79 8 12 8 16 9.79 16 12 14.21 16 12 16Z"/>
    <path d="M12 10C10.9 10 10 10.9 10 12S10.9 14 12 14 14 13.1 14 12 13.1 10 12 10Z"/>
  </svg>
);

export const AppIcons = {
    UserIcon: (props: IconProps) => <HeroUserCircleIcon {...props} />,
    PlayCircleIcon: (props: IconProps) => <HeroPlayCircleIcon {...props} />,
    ChevronDownIcon: (props: IconProps) => <HeroChevronDownIcon {...props} />,
    Edit3Icon: (props: IconProps) => <HeroPencilSquareIcon {...props} />,
    Wand2Icon: (props: IconProps) => <HeroSparklesIcon {...props} />,
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
    ChatIcon: (props: IconProps) => <HeroChatBubbleBottomCenterTextIcon {...props} />,
    LightBulbIcon: (props: IconProps) => <HeroLightBulbIcon {...props} />,
    HeartIcon: (props: IconProps) => <HeroHeartIcon {...props} />,
    SunIcon: (props: IconProps) => <HeroSunIcon {...props} />,
    MoonIcon: (props: IconProps) => <HeroMoonIcon {...props} />,
    StarIcon: (props: IconProps) => <HeroStarIcon {...props} />,
    FireIcon: (props: IconProps) => <HeroFireIcon {...props} />,
    EyeIcon: (props: IconProps) => <HeroEyeIcon {...props} />,
    ClockIcon: (props: IconProps) => <HeroClockIcon {...props} />,
    CalendarIcon: (props: IconProps) => <HeroCalendarIcon {...props} />,
    PlusIcon: (props: IconProps) => <HeroPlusIcon {...props} />,
    MinusIcon: (props: IconProps) => <HeroMinusIcon {...props} />,
    CheckIcon: (props: IconProps) => <HeroCheckIcon {...props} />,
    WarningIcon: (props: IconProps) => <HeroExclamationTriangleIcon {...props} />,
    InfoIcon: (props: IconProps) => <HeroInformationCircleIcon {...props} />,
    SettingsIcon: (props: IconProps) => <HeroCogIcon {...props} />,
    HomeIcon: (props: IconProps) => <HeroHomeIcon {...props} />,
    SearchIcon: (props: IconProps) => <HeroMagnifyingGlassIcon {...props} />,
    TrashIcon: (props: IconProps) => <HeroTrashIcon {...props} />,
    ArrowUpIcon: (props: IconProps) => <HeroArrowUpIcon {...props} />,
    ArrowDownIcon: (props: IconProps) => <HeroArrowDownIcon {...props} />,
    ArrowLeftIcon: (props: IconProps) => <HeroArrowLeftIcon {...props} />,
    ArrowRightIcon: (props: IconProps) => <HeroArrowRightIcon {...props} />,
    EnergyIcon: EnergyIcon,
    ChakraIcon: ChakraIcon,
};
