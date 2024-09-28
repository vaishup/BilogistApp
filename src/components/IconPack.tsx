import {
    ScanFace,
    Fingerprint,
    Settings,
    Bell,
    BellDot,
    ChevronDown,
    ChevronLeft,
    ArrowBigUp,
    ArrowBigDown,
    ArrowRightLeft,
    CirclePlus,
    CircleMinus,
    Store,
    House,
    Coins,
    Handshake,
    Eye,
    EyeOff,
    ChevronRight,
    MoveUp,
    MoveDown,
    Landmark,
    Plus,
    Minus,
    Smartphone,
    Image as ImageLucide,
    UserRound,
    ShieldAlert,
    ArrowUpDown,
    CreditCard,
    Wallet,
    X,
    Copy,
    QrCode,
    CircleDollarSign,
    Share2,
    HandCoins,
    Search,
    Pencil,
    UserRoundPlus,
    MessageCircle,
    BookUser,
    Check,
    UserRoundMinus,
    Camera,
    MessageSquare,
    Download,
    Send,
    Scan,
    CircleX,
    Calendar,
    Banknote,
    HouseIcon,
    CircleUserRound
  } from 'lucide-react-native';

  import {Image} from '@gluestack-ui/themed';
  import {colors} from '../styles/color';
  
 const logo = require('../assets/logo.png');
  // const XWallet_2 = require('../assets/appLogo/XWallet_2.png');
  // const XWallet_3 = require('../assets/appLogo/XWallet_3.png');
  // const Biometric = require('../assets/biometric.png');
  
  interface IconProps {
    type: any;
    color?: string;
    size?: number;
    stroke?: number;
  }
  
  interface Dictionary<Type> {
    [key: string]: Type;
  }
  
  const Icon = (props: IconProps) => {
    const size_sm = 30;
    const default_stroke = 1.75;
  
    let icons: Dictionary<any> = {
      XWallet_1: (
        <Image
          alt="xwallet"
          source={logo}
          resizeMode="contain"
          height={props.size}
          width={props.size}
        />
      ),
      HouseIcon: (
        <HouseIcon
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      XWallet_2: (
        <Image
          alt="xwallet"
          source={logo}
          resizeMode="contain"
          height={props.size ?? 178}
          width={props.size ?? 165 * 0.927}
        />
      ),
      XWallet_3: (
        <Image
          alt="xwallet"
          source={logo}
          resizeMode="contain"
          height={props.size ?? size_sm}
          width={(props.size ?? size_sm) * 3.78}
        />
      ),
    
      ScanFace: (
        <ScanFace
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Fingerprint: (
        <Fingerprint
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Settings: (
        <Settings
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Bell: (
        <Bell
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      BellDot: (
        <BellDot
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      ChevronDown: (
        <ChevronDown
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      ArrowBigUp: (
        <ArrowBigUp
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      ArrowBigDown: (
        <ArrowBigDown
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      ArrowRightLeft: (
        <ArrowRightLeft
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      CirclePlus: (
        <CirclePlus
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      CircleMinus: (
        <CircleMinus
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Store: (
        <Store
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      House: (
        <House
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Coins: (
        <Coins
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Handshake: (
        <Handshake
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Copy: (
        <Copy
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      QrCode: (
        <QrCode
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Eye: (
        <Eye
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      EyeOff: (
        <EyeOff
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      ChevronLeft: (
        <ChevronLeft
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      ChevronRight: (
        <ChevronRight
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      MoveUp: (
        <MoveUp
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      MoveDown: (
        <MoveDown
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Landmark: (
        <Landmark
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Plus: (
        <Plus
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Minus: (
        <Minus
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      ArrowUpDown: (
        <ArrowUpDown
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Wallet: (
        <Wallet
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      CreditCard: (
        <CreditCard
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Smartphone: (
        <Smartphone
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      ImageLucide: (
        <ImageLucide
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      UserRound: (
        <UserRound
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      CircleUserRound: (
        <CircleUserRound
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      ShieldAlert: (
        <ShieldAlert
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      X: (
        <X
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      CircleDollarSign: (
        <CircleDollarSign
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Share2: (
        <Share2
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      HandCoins: (
        <HandCoins
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Search: (
        <Search
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Pencil: (
        <Pencil
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Camera: (
        <Camera
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Check: (
        <Check
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      UserRoundPlus: (
        <UserRoundPlus
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      MessageCircle: (
        <MessageCircle
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      BookUser: (
        <BookUser
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      UserRoundMinus: (
        <UserRoundMinus
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      MessageSquare: (
        <MessageSquare
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Send: (
        <Send
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Download: (
        <Download
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Scan: (
        <Scan
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      CircleX: (
        <CircleX
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Calendar: (
        <Calendar
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
      Banknote: (
        <Banknote
          strokeWidth={props.stroke ?? default_stroke}
          color={props.color ?? colors.txtColor_bg}
          size={props.size ?? size_sm}
        />
      ),
    };
    return icons[props.type];
  };
  
  export default Icon;