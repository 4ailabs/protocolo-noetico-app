import React from 'react';
import {
  // Iconos principales de la aplicación
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
  
  // Iconos de estado y emociones
  HeartIcon as HeroHeartIcon,
  SunIcon as HeroSunIcon,
  MoonIcon as HeroMoonIcon,
  StarIcon as HeroStarIcon,
  FireIcon as HeroFireIcon,
  EyeIcon as HeroEyeIcon,
  FaceSmileIcon as HeroFaceSmileIcon,
  HandRaisedIcon as HeroHandRaisedIcon,
  
  // Iconos de tiempo y calendario
  ClockIcon as HeroClockIcon,
  CalendarIcon as HeroCalendarIcon,
  CalendarDaysIcon as HeroCalendarDaysIcon,
  
  // Iconos de navegación y acciones
  PlusIcon as HeroPlusIcon,
  MinusIcon as HeroMinusIcon,
  CheckIcon as HeroCheckIcon,
  ExclamationTriangleIcon as HeroExclamationTriangleIcon,
  InformationCircleIcon as HeroInformationCircleIcon,
  CogIcon as HeroCogIcon,
  HomeIcon as HeroHomeIcon,
  MagnifyingGlassIcon as HeroMagnifyingGlassIcon,
  TrashIcon as HeroTrashIcon,
  
  // Iconos de dirección
  ArrowUpIcon as HeroArrowUpIcon,
  ArrowDownIcon as HeroArrowDownIcon,
  ArrowLeftIcon as HeroArrowLeftIcon,
  ArrowRightIcon as HeroArrowRightIcon,
  ChevronUpIcon as HeroChevronUpIcon,
  ChevronLeftIcon as HeroChevronLeftIcon,
  ChevronRightIcon as HeroChevronRightIcon,
  
  // Iconos científicos y espirituales
  BeakerIcon as HeroBeakerIcon,
  CubeIcon as HeroCubeIcon,
  GlobeAltIcon as HeroGlobeAltIcon,
  ShieldCheckIcon as HeroShieldCheckIcon,
  AcademicCapIcon as HeroAcademicCapIcon,
  PuzzlePieceIcon as HeroPuzzlePieceIcon,
  RocketLaunchIcon as HeroRocketLaunchIcon,
  ScaleIcon as HeroScaleIcon,
  
  // Iconos de comunicación
  SpeakerWaveIcon as HeroSpeakerWaveIcon,
  MicrophoneIcon as HeroMicrophoneIcon,
  ChatBubbleLeftIcon as HeroChatBubbleLeftIcon,
  PaperAirplaneIcon as HeroPaperAirplaneIcon,
  
  // Iconos de documentos y archivos
  DocumentIcon as HeroDocumentIcon,
  FolderIcon as HeroFolderIcon,
  ClipboardIcon as HeroClipboardIcon,
  BookmarkIcon as HeroBookmarkIcon,
  
  // Iconos de configuración y herramientas
  WrenchScrewdriverIcon as HeroWrenchScrewdriverIcon,
  Cog6ToothIcon as HeroCog6ToothIcon,
  AdjustmentsHorizontalIcon as HeroAdjustmentsHorizontalIcon,
  
  // Iconos de medios y reproducción
  PauseIcon as HeroPauseIcon,
  StopIcon as HeroStopIcon,
  BackwardIcon as HeroBackwardIcon,
  ForwardIcon as HeroForwardIcon,
  
  // Iconos de estado y notificaciones
  BellIcon as HeroBellIcon,
  CheckCircleIcon as HeroCheckCircleIcon,
  ExclamationCircleIcon as HeroExclamationCircleIcon,
  NoSymbolIcon as HeroNoSymbolIcon,
  
  // Iconos de usuario y personas
  UserGroupIcon as HeroUserGroupIcon,
  UsersIcon as HeroUsersIcon,
  FingerPrintIcon as HeroFingerPrintIcon,
  
  // Iconos de conectividad y red
  SignalIcon as HeroSignalIcon,
  CloudIcon as HeroCloudIcon,
  ServerIcon as HeroServerIcon,
  
  // Iconos adicionales útiles
  TagIcon as HeroTagIcon,
  FlagIcon as HeroFlagIcon,
  GiftIcon as HeroGiftIcon,
  TrophyIcon as HeroTrophyIcon,
  MusicalNoteIcon as HeroMusicalNoteIcon,
  PaintBrushIcon as HeroPaintBrushIcon,
  SwatchIcon as HeroSwatchIcon,
  
  // Iconos de análisis y datos
  ChartBarIcon as HeroChartBarIcon,
  ChartPieIcon as HeroChartPieIcon,
  PresentationChartLineIcon as HeroPresentationChartLineIcon,
  TableCellsIcon as HeroTableCellsIcon,
  
  // Iconos de vista y visualización
  EyeSlashIcon as HeroEyeSlashIcon,
  ListBulletIcon as HeroListBulletIcon,
  Squares2X2Icon as HeroSquares2X2Icon,
  ViewColumnsIcon as HeroViewColumnsIcon,
  
  // Iconos de seguridad
  LockClosedIcon as HeroLockClosedIcon,
  LockOpenIcon as HeroLockOpenIcon,
  KeyIcon as HeroKeyIcon,
  
  // Iconos de ubicación
  MapIcon as HeroMapIcon,
  MapPinIcon as HeroMapPinIcon,
  GlobeAmericasIcon as HeroGlobeAmericasIcon,
  
  // Iconos de construcción y edificios
  BuildingOfficeIcon as HeroBuildingOfficeIcon,
  BuildingLibraryIcon as HeroBuildingLibraryIcon,
  HomeModernIcon as HeroHomeModernIcon,
  
  // Iconos de idioma
  LanguageIcon as HeroLanguageIcon,
  
  // Iconos de comunicación avanzada
  MegaphoneIcon as HeroMegaphoneIcon,
  ChatBubbleLeftRightIcon as HeroChatBubbleLeftRightIcon,
  
  // Iconos de cursor y interacción
  CursorArrowRaysIcon as HeroCursorArrowRaysIcon,
  CursorArrowRippleIcon as HeroCursorArrowRippleIcon,
  
  // Iconos de identificación
  IdentificationIcon as HeroIdentificationIcon,
  QrCodeIcon as HeroQrCodeIcon,
  
  // Iconos de archivo y almacenamiento
  ArchiveBoxIcon as HeroArchiveBoxIcon,
  InboxIcon as HeroInboxIcon,
  PaperClipIcon as HeroPaperClipIcon,
  
  // Iconos de compartir y conectar
  ShareIcon as HeroShareIcon,
  LinkIcon as HeroLinkIcon,
  
  // Iconos de descarga y carga
  ArrowDownTrayIcon as HeroArrowDownTrayIcon,
  ArrowUpTrayIcon as HeroArrowUpTrayIcon,
  CloudArrowDownIcon as HeroCloudArrowDownIcon,
  CloudArrowUpIcon as HeroCloudArrowUpIcon,
  
  // Iconos de contacto
  PhoneIcon as HeroPhoneIcon,
  EnvelopeIcon as HeroEnvelopeIcon,
  AtSymbolIcon as HeroAtSymbolIcon,
  
  // Iconos de medios audiovisuales
  VideoCameraIcon as HeroVideoCameraIcon,
  PhotoIcon as HeroPhotoIcon,
  CameraIcon as HeroCameraIcon,
  FilmIcon as HeroFilmIcon,
  
  // Iconos de volumen y audio
  SpeakerXMarkIcon as HeroSpeakerXMarkIcon,
  
  // Iconos de dispositivos
  ComputerDesktopIcon as HeroComputerDesktopIcon,
  DevicePhoneMobileIcon as HeroDevicePhoneMobileIcon,
  DeviceTabletIcon as HeroDeviceTabletIcon,
  TvIcon as HeroTvIcon,
  PrinterIcon as HeroPrinterIcon,
  
  // Iconos de desarrollo y código
  CodeBracketIcon as HeroCodeBracketIcon,
  BugAntIcon as HeroBugAntIcon,
  CommandLineIcon as HeroCommandLineIcon,
  CpuChipIcon as HeroCpuChipIcon,
  
  // Iconos de herramientas
  WrenchIcon as HeroWrenchIcon,
  
  // Iconos de filtros y búsqueda
  FunnelIcon as HeroFunnelIcon,
  MagnifyingGlassPlusIcon as HeroMagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon as HeroMagnifyingGlassMinusIcon,
  
  // Iconos de menú y navegación
  Bars3Icon as HeroBars3Icon,
  EllipsisHorizontalIcon as HeroEllipsisHorizontalIcon,
  EllipsisVerticalIcon as HeroEllipsisVerticalIcon,
  
  // Iconos de círculos y formas
  PlusCircleIcon as HeroPlusCircleIcon,
  MinusCircleIcon as HeroMinusCircleIcon,
  XMarkIcon as HeroXMarkIcon,
  
  // Iconos de validación y estado
  CheckBadgeIcon as HeroCheckBadgeIcon,
  ShieldExclamationIcon as HeroShieldExclamationIcon,
  QuestionMarkCircleIcon as HeroQuestionMarkCircleIcon,
  
  // Iconos de emociones y reacciones
  HandThumbUpIcon as HeroHandThumbUpIcon,
  HandThumbDownIcon as HeroHandThumbDownIcon,
  FaceFrownIcon as HeroFaceFrownIcon,
  
  // Iconos de documentos específicos
  DocumentCheckIcon as HeroDocumentCheckIcon,
  DocumentPlusIcon as HeroDocumentPlusIcon,
  DocumentMinusIcon as HeroDocumentMinusIcon,
  DocumentDuplicateIcon as HeroDocumentDuplicateIcon,
  
  // Iconos de carpetas
  FolderOpenIcon as HeroFolderOpenIcon,
  FolderPlusIcon as HeroFolderPlusIcon,
  
  // Iconos de portapapeles
  ClipboardDocumentIcon as HeroClipboardDocumentIcon,
  ClipboardDocumentCheckIcon as HeroClipboardDocumentCheckIcon,
  
  // Iconos de marcadores
  BookmarkSlashIcon as HeroBookmarkSlashIcon,
  BookmarkSquareIcon as HeroBookmarkSquareIcon,
  
  // Iconos de noticias y RSS
  NewspaperIcon as HeroNewspaperIcon,
  RssIcon as HeroRssIcon,
  
  // Iconos de comercio
  ShoppingCartIcon as HeroShoppingCartIcon,
  CreditCardIcon as HeroCreditCardIcon,
  BanknotesIcon as HeroBanknotesIcon,
  CalculatorIcon as HeroCalculatorIcon,
  
  // Iconos de tickets y recibos
  TicketIcon as HeroTicketIcon,
  ReceiptPercentIcon as HeroReceiptPercentIcon,
  
  // Iconos de ajustes avanzados
  AdjustmentsVerticalIcon as HeroAdjustmentsVerticalIcon,
  Cog8ToothIcon as HeroCog8ToothIcon,
  
  // Iconos de flechas especiales
  ArrowsRightLeftIcon as HeroArrowsRightLeftIcon,
  ArrowsUpDownIcon as HeroArrowsUpDownIcon,
  ArrowUturnLeftIcon as HeroArrowUturnLeftIcon,
  ArrowUturnRightIcon as HeroArrowUturnRightIcon,
  
  // Iconos de chevron dobles
  ChevronDoubleUpIcon as HeroChevronDoubleUpIcon,
  ChevronDoubleDownIcon as HeroChevronDoubleDownIcon,
  ChevronDoubleLeftIcon as HeroChevronDoubleLeftIcon,
  ChevronDoubleRightIcon as HeroChevronDoubleRightIcon,
  
  // Iconos de señal y conectividad
  SignalSlashIcon as HeroSignalSlashIcon,
  BellSlashIcon as HeroBellSlashIcon,
  BellAlertIcon as HeroBellAlertIcon,
  
  // Iconos de cubo y formas 3D
  CubeTransparentIcon as HeroCubeTransparentIcon,
  CircleStackIcon as HeroCircleStackIcon,
  ServerStackIcon as HeroServerStackIcon,
  
  // Iconos de globo específicos
  GlobeEuropeAfricaIcon as HeroGlobeEuropeAfricaIcon,
  GlobeAsiaAustraliaIcon as HeroGlobeAsiaAustraliaIcon,
  
  // Iconos de edificios específicos
  BuildingOffice2Icon as HeroBuildingOffice2Icon,
  BuildingStorefrontIcon as HeroBuildingStorefrontIcon,
  
  // Iconos de usuario avanzados
  UserIcon as HeroUserIcon,
  UserPlusIcon as HeroUserPlusIcon,
  UserMinusIcon as HeroUserMinusIcon,
  
  // Iconos de hash y símbolos
  HashtagIcon as HeroHashtagIcon
} from '@heroicons/react/24/outline';

interface IconProps {
  className?: string;
}

// Iconos principales de la aplicación
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

// Iconos de estado y emociones
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

// Iconos científicos y espirituales específicos para protocolo noético
export const BeakerIcon: React.FC<IconProps> = ({ className }) => <HeroBeakerIcon className={className} />;
export const CubeIcon: React.FC<IconProps> = ({ className }) => <HeroCubeIcon className={className} />;
export const GlobeIcon: React.FC<IconProps> = ({ className }) => <HeroGlobeAltIcon className={className} />;
export const ShieldIcon: React.FC<IconProps> = ({ className }) => <HeroShieldCheckIcon className={className} />;
export const AcademicIcon: React.FC<IconProps> = ({ className }) => <HeroAcademicCapIcon className={className} />;
export const PuzzleIcon: React.FC<IconProps> = ({ className }) => <HeroPuzzlePieceIcon className={className} />;
export const RocketIcon: React.FC<IconProps> = ({ className }) => <HeroRocketLaunchIcon className={className} />;
export const ScaleIcon: React.FC<IconProps> = ({ className }) => <HeroScaleIcon className={className} />;

// Iconos de comunicación y transmisión
export const SpeakerIcon: React.FC<IconProps> = ({ className }) => <HeroSpeakerWaveIcon className={className} />;
export const MicrophoneIcon: React.FC<IconProps> = ({ className }) => <HeroMicrophoneIcon className={className} />;
export const ChatBubbleIcon: React.FC<IconProps> = ({ className }) => <HeroChatBubbleLeftIcon className={className} />;
export const SendIcon: React.FC<IconProps> = ({ className }) => <HeroPaperAirplaneIcon className={className} />;

// Iconos de documentos y archivos
export const DocumentIcon: React.FC<IconProps> = ({ className }) => <HeroDocumentIcon className={className} />;
export const FolderIcon: React.FC<IconProps> = ({ className }) => <HeroFolderIcon className={className} />;
export const ClipboardIcon: React.FC<IconProps> = ({ className }) => <HeroClipboardIcon className={className} />;
export const BookmarkIcon: React.FC<IconProps> = ({ className }) => <HeroBookmarkIcon className={className} />;

// Iconos de herramientas y configuración
export const ToolsIcon: React.FC<IconProps> = ({ className }) => <HeroWrenchScrewdriverIcon className={className} />;
export const CogAdvancedIcon: React.FC<IconProps> = ({ className }) => <HeroCog6ToothIcon className={className} />;
export const AdjustmentsIcon: React.FC<IconProps> = ({ className }) => <HeroAdjustmentsHorizontalIcon className={className} />;

// Iconos de medios y reproducción
export const PauseIcon: React.FC<IconProps> = ({ className }) => <HeroPauseIcon className={className} />;
export const StopIcon: React.FC<IconProps> = ({ className }) => <HeroStopIcon className={className} />;
export const BackwardIcon: React.FC<IconProps> = ({ className }) => <HeroBackwardIcon className={className} />;
export const ForwardIcon: React.FC<IconProps> = ({ className }) => <HeroForwardIcon className={className} />;

// Iconos de estado y notificaciones
export const BellIcon: React.FC<IconProps> = ({ className }) => <HeroBellIcon className={className} />;
export const CheckCircleIcon: React.FC<IconProps> = ({ className }) => <HeroCheckCircleIcon className={className} />;
export const ExclamationIcon: React.FC<IconProps> = ({ className }) => <HeroExclamationCircleIcon className={className} />;
export const NoSymbolIcon: React.FC<IconProps> = ({ className }) => <HeroNoSymbolIcon className={className} />;

// Iconos de usuario y personas
export const UserGroupIcon: React.FC<IconProps> = ({ className }) => <HeroUserGroupIcon className={className} />;
export const UsersIcon: React.FC<IconProps> = ({ className }) => <HeroUsersIcon className={className} />;
export const FingerprintIcon: React.FC<IconProps> = ({ className }) => <HeroFingerPrintIcon className={className} />;

// Iconos de conectividad y red
export const SignalIcon: React.FC<IconProps> = ({ className }) => <HeroSignalIcon className={className} />;
export const CloudIcon: React.FC<IconProps> = ({ className }) => <HeroCloudIcon className={className} />;
export const ServerIcon: React.FC<IconProps> = ({ className }) => <HeroServerIcon className={className} />;

// Iconos adicionales útiles para la aplicación
export const TagIcon: React.FC<IconProps> = ({ className }) => <HeroTagIcon className={className} />;
export const FlagIcon: React.FC<IconProps> = ({ className }) => <HeroFlagIcon className={className} />;
export const GiftIcon: React.FC<IconProps> = ({ className }) => <HeroGiftIcon className={className} />;
export const TrophyIcon: React.FC<IconProps> = ({ className }) => <HeroTrophyIcon className={className} />;
export const MusicalNoteIcon: React.FC<IconProps> = ({ className }) => <HeroMusicalNoteIcon className={className} />;
export const PaintBrushIcon: React.FC<IconProps> = ({ className }) => <HeroPaintBrushIcon className={className} />;
export const SwatchIcon: React.FC<IconProps> = ({ className }) => <HeroSwatchIcon className={className} />;

// Iconos personalizados específicos para protocolo noético
export const Flower2Icon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 0-3 3-3 6s3 6 3 6 3-3 3-6-3-6-3-6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12c0 0-3-3-6-3s-6 3-6 3 3 3 6 3 6-3 6-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12c0 0 3-3 6-3s6 3 6 3-3 3-6 3-6-3-6-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c0 0 3-3 3-6s-3-6-3-6-3 3-3 6 3 6 3 6z" />
    <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const EnergyIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.5 7h7l-5.5 4 2 7-6-4.5L6 20l2-7-5.5-4h7L12 2z" />
    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChakraIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.34 6.34l11.32 11.32M6.34 17.66L17.66 6.34" />
  </svg>
);

export const MeditationIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 0-3 1.5-3 3v2c0 1.5 1.5 3 3 3s3-1.5 3-3V6c0-1.5-1.5-3-3-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 11v2c0 2 1 4 3 4s3-2 3-4v-2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 17c0 2 2 4 6 4s6-2 6-4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 19h8" />
  </svg>
);

export const FrequencyIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 6v12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 6v12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 10v4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 10v4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 8v8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 8v8" />
  </svg>
);

export const VibrationalIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.24 7.76a6 6 0 0 1 0 8.49" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.76 16.24a6 6 0 0 1 0-8.49" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.93 19.07a10 10 0 0 1 0-14.14" />
  </svg>
);

export const HealingIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12" />
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6M15 9l-6 6" opacity="0.3" />
  </svg>
);

export const TransmissionIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
  </svg>
);

export const ConsciousnessIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

// Objeto AppIcons actualizado con todos los iconos disponibles
export const AppIcons = {
    // Iconos principales existentes
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
    ZapIcon: (props: IconProps) => <HeroBoltIcon {...props} />,
    XCircleIcon: (props: IconProps) => <HeroXCircleIcon {...props} />,
    ChatIcon: (props: IconProps) => <HeroChatBubbleBottomCenterTextIcon {...props} />,
    LightBulbIcon: (props: IconProps) => <HeroLightBulbIcon {...props} />,
    
    // Iconos de estado y emociones
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
    
    // Iconos científicos y espirituales
    BeakerIcon: (props: IconProps) => <HeroBeakerIcon {...props} />,
    CubeIcon: (props: IconProps) => <HeroCubeIcon {...props} />,
    GlobeIcon: (props: IconProps) => <HeroGlobeAltIcon {...props} />,
    ShieldIcon: (props: IconProps) => <HeroShieldCheckIcon {...props} />,
    AcademicIcon: (props: IconProps) => <HeroAcademicCapIcon {...props} />,
    PuzzleIcon: (props: IconProps) => <HeroPuzzlePieceIcon {...props} />,
    RocketIcon: (props: IconProps) => <HeroRocketLaunchIcon {...props} />,
    ScaleIcon: (props: IconProps) => <HeroScaleIcon {...props} />,
    
    // Iconos de comunicación y transmisión
    SpeakerIcon: (props: IconProps) => <HeroSpeakerWaveIcon {...props} />,
    MicrophoneIcon: (props: IconProps) => <HeroMicrophoneIcon {...props} />,
    ChatBubbleIcon: (props: IconProps) => <HeroChatBubbleLeftIcon {...props} />,
    SendIcon: (props: IconProps) => <HeroPaperAirplaneIcon {...props} />,
    
    // Iconos de documentos y archivos
    DocumentIcon: (props: IconProps) => <HeroDocumentIcon {...props} />,
    FolderIcon: (props: IconProps) => <HeroFolderIcon {...props} />,
    ClipboardIcon: (props: IconProps) => <HeroClipboardIcon {...props} />,
    BookmarkIcon: (props: IconProps) => <HeroBookmarkIcon {...props} />,
    
    // Iconos de herramientas y configuración
    ToolsIcon: (props: IconProps) => <HeroWrenchScrewdriverIcon {...props} />,
    CogAdvancedIcon: (props: IconProps) => <HeroCog6ToothIcon {...props} />,
    AdjustmentsIcon: (props: IconProps) => <HeroAdjustmentsHorizontalIcon {...props} />,
    
    // Iconos de medios y reproducción
    PauseIcon: (props: IconProps) => <HeroPauseIcon {...props} />,
    StopIcon: (props: IconProps) => <HeroStopIcon {...props} />,
    BackwardIcon: (props: IconProps) => <HeroBackwardIcon {...props} />,
    ForwardIcon: (props: IconProps) => <HeroForwardIcon {...props} />,
    
    // Iconos de estado y notificaciones
    BellIcon: (props: IconProps) => <HeroBellIcon {...props} />,
    CheckCircleIcon: (props: IconProps) => <HeroCheckCircleIcon {...props} />,
    ExclamationIcon: (props: IconProps) => <HeroExclamationCircleIcon {...props} />,
    NoSymbolIcon: (props: IconProps) => <HeroNoSymbolIcon {...props} />,
    
    // Iconos de usuario y personas
    UserGroupIcon: (props: IconProps) => <HeroUserGroupIcon {...props} />,
    UsersIcon: (props: IconProps) => <HeroUsersIcon {...props} />,
    FingerprintIcon: (props: IconProps) => <HeroFingerPrintIcon {...props} />,
    
    // Iconos de conectividad y red
    SignalIcon: (props: IconProps) => <HeroSignalIcon {...props} />,
    CloudIcon: (props: IconProps) => <HeroCloudIcon {...props} />,
    ServerIcon: (props: IconProps) => <HeroServerIcon {...props} />,
    
    // Iconos adicionales útiles
    TagIcon: (props: IconProps) => <HeroTagIcon {...props} />,
    FlagIcon: (props: IconProps) => <HeroFlagIcon {...props} />,
    GiftIcon: (props: IconProps) => <HeroGiftIcon {...props} />,
    TrophyIcon: (props: IconProps) => <HeroTrophyIcon {...props} />,
    MusicalNoteIcon: (props: IconProps) => <HeroMusicalNoteIcon {...props} />,
    PaintBrushIcon: (props: IconProps) => <HeroPaintBrushIcon {...props} />,
    SwatchIcon: (props: IconProps) => <HeroSwatchIcon {...props} />,
    
    // Iconos personalizados específicos para protocolo noético
    Flower2Icon: Flower2Icon,
    EnergyIcon: EnergyIcon,
    ChakraIcon: ChakraIcon,
    MeditationIcon: MeditationIcon,
    FrequencyIcon: FrequencyIcon,
    VibrationalIcon: VibrationalIcon,
    HealingIcon: HealingIcon,
    TransmissionIcon: TransmissionIcon,
    ConsciousnessIcon: ConsciousnessIcon,
};
