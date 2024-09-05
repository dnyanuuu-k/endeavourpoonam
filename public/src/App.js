
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import Home from './Componants/Home/Home.js'
import Navbar from './Componants/Navbar/Navbar';
import Footer from './Componants/Footer/Footer'
import Project from './Componants/Project/Project'
import Plan from './Componants/Plan/Plan'
import BlogPage from './Componants/Blog/BlogPage'
import { page1Data } from './Componants/Blog/Data/Page1Data';
import { page2Data } from './Componants/Blog/Data/Page2Data';
import { page3Data } from './Componants/Blog/Data/Page3Data';
import { page4Data } from './Componants/Blog/Data/Page4Data';
// import { page5Data } from './Componants/Blog/Data/Page5.Data.js';
import { page5Data } from './Componants/Blog/Data/Page5Data.js';
import { page6Data } from './Componants/Blog/Data/Page6Data.js';
import { page7Data } from './Componants/Blog/Data/Page7Data.js';
import { page8Data } from './Componants/Blog/Data/Page8Data.js';
import { page9Data } from './Componants/Blog/Data/Page9Data.js';
import { page10Data } from './Componants/Blog/Data/Page10Data.js';
import { page11Data } from './Componants/Blog/Data/Page11Data.js';
import { page12Data } from './Componants/Blog/Data/Page12Data.js';
import { page13Data } from './Componants/Blog/Data/Page13Data.js';
import { page14Data } from './Componants/Blog/Data/Page14Data.js';
import { page15Data } from './Componants/Blog/Data/Page15Data.js';
import { page16Data } from './Componants/Blog/Data/Page16Data.js';
import { page17Data } from './Componants/Blog/Data/Page17Data.js';
import { page18Data } from './Componants/Blog/Data/Page18Data.js';
import { page19Data } from './Componants/Blog/Data/Page19Data.js';
import { page20Data } from './Componants/Blog/Data/Page20Data.js';
import { page21Data } from './Componants/Blog/Data/Page21Data.js';
import { page22Data } from './Componants/Blog/Data/Page22Data.js';
import { page23Data } from './Componants/Blog/Data/Page23Data.js';
import { page24Data } from './Componants/Blog/Data/Page24Data.js';
import { page25Data } from './Componants/Blog/Data/Page25Data.js';
import { page26Data } from './Componants/Blog/Data/Page26Data.js';
// import { page27Data } from './Componants/Blog/Data/Page27Data.js';
import { page28Data } from './Componants/Blog/Data/Page28Data.js';
import { page29Data } from './Componants/Blog/Data/Page29Data.js';
import { page30Data } from './Componants/Blog/Data/Page30Data.js';
import { page31Data } from './Componants/Blog/Data/page31Data.js';
import { page32Data } from './Componants/Blog/Data/Page32Data.js';
import { page33Data } from './Componants/Blog/Data/Page33Data.js';
import { page34Data } from './Componants/Blog/Data/Page34Data.js';
import { page35Data } from './Componants/Blog/Data/Page35Data.js';
import { page36Data } from './Componants/Blog/Data/Page36Data.js';
import { page37Data } from './Componants/Blog/Data/Page37Data.js';
import { page38Data } from './Componants/Blog/Data/Page38Data.js';
import { page39Data } from './Componants/Blog/Data/Page39Data.js';
import { page40Data } from './Componants/Blog/Data/Page40Data.js';
import { page41Data } from './Componants/Blog/Data/Page41Data.js';
import { page42Data } from './Componants/Blog/Data/Page42Data.js';
import { page43Data } from './Componants/Blog/Data/Page43Data.js';
import { page44Data } from './Componants/Blog/Data/Page44Data.js';
import { page45Data } from './Componants/Blog/Data/Page45Data.js';

// BlogPageExpand 2 data
import { page46Data } from './Componants/Blog/Data/Page46Data.js';
import { page47Data } from './Componants/Blog/Data/Page47Data.js';
import { page48Data } from './Componants/Blog/Data/Page48Data.js';
import { page49Data } from './Componants/Blog/Data/Page49Data.js';
import { page50Data } from './Componants/Blog/Data/Page50Data.js';
import { page51Data } from './Componants/Blog/Data/Page51Data.js';
import { page52Data } from './Componants/Blog/Data/Page52Data.js';
import { page53Data } from './Componants/Blog/Data/Page53Data.js';
import { page54Data } from './Componants/Blog/Data/Page54Data.js';
import { page55Data } from './Componants/Blog/Data/Page55Data.js';
import { page56Data } from './Componants/Blog/Data/Page56Data.js';
import { page57Data } from './Componants/Blog/Data/Page57Data.js';
import { page58Data } from './Componants/Blog/Data/Page58Data.js';
import { page59Data } from './Componants/Blog/Data/Page59Data.js';
import { page60Data } from './Componants/Blog/Data/Page60Data.js';
import { page61Data } from './Componants/Blog/Data/Page61Data.js';
import { page62Data } from './Componants/Blog/Data/Page62Data.js';
import { page63Data } from './Componants/Blog/Data/Page63Data.js';
import { page64Data } from './Componants/Blog/Data/Page64Data.js';
import { page65Data } from './Componants/Blog/Data/page65Data.js';
import { page66Data } from './Componants/Blog/Data/Page66Data.js';
import { page67Data } from './Componants/Blog/Data/Page67Data.js';
import { page68Data } from './Componants/Blog/Data/Page68Data.js';
import { page69Data } from './Componants/Blog/Data/Page69Data.js';
import { page70Data } from './Componants/Blog/Data/Page70Data.js';
import { page71Data } from './Componants/Blog/Data/Page71Data.js';
import { page72Data } from './Componants/Blog/Data/Page72Data.js';
import { page73Data } from './Componants/Blog/Data/Page73Data.js';
import { page74Data } from './Componants/Blog/Data/Page74Data.js';
import { page75Data } from './Componants/Blog/Data/Page75Data.js';
import { page76Data } from './Componants/Blog/Data/Page76Data.js';
import { page77Data } from './Componants/Blog/Data/Page77Data.js';
import { page78Data } from './Componants/Blog/Data/Page78Data.js';
import { page79Data } from './Componants/Blog/Data/Page79Data.js';
import { page80Data } from './Componants/Blog/Data/Page80Data.js';
import { page81Data } from './Componants/Blog/Data/Page81Data.js';
import { page82Data } from './Componants/Blog/Data/Page82Data.js';
import { page83Data } from './Componants/Blog/Data/Page83Data.js';
import { page84Data } from './Componants/Blog/Data/Page84Data.js';


import { page255Data } from './Componants/Blog/Data/Page255Data';
import { page256Data } from './Componants/Blog/Data/Page256Data';
import { page257Data } from './Componants/Blog/Data/Page257Data';
import { page258Data } from './Componants/Blog/Data/Page258Data';
import { page259Data } from './Componants/Blog/Data/Page259Data';
import { page260Data } from './Componants/Blog/Data/Page260Data';
import { page261Data } from './Componants/Blog/Data/Page261Data';
import { page262Data } from './Componants/Blog/Data/Page262Data';
import { page263Data } from './Componants/Blog/Data/Page263Data';
import { page264Data } from './Componants/Blog/Data/Page264Data';
import { page265Data } from './Componants/Blog/Data/Page265Data';
import { page266Data } from './Componants/Blog/Data/Page266Data';
import { page267Data } from './Componants/Blog/Data/Page267Data';
import { page268Data } from './Componants/Blog/Data/Page268Data';
import { page269Data } from './Componants/Blog/Data/Page269Data';
import { page270Data } from './Componants/Blog/Data/Page270Data';
import { page271Data } from './Componants/Blog/Data/Page271Data';
import { page272Data } from './Componants/Blog/Data/Page272Data';
import { page273Data } from './Componants/Blog/Data/Page273Data';
import { page274Data } from './Componants/Blog/Data/Page274Data';
import { page275Data } from './Componants/Blog/Data/Page275Data';
import { page276Data } from './Componants/Blog/Data/Page276Data';
import { page277Data } from './Componants/Blog/Data/Page277Data';
import { page278Data } from './Componants/Blog/Data/Page278Data';
import { page279Data } from './Componants/Blog/Data/Page279Data';
import { page280Data } from './Componants/Blog/Data/Page280Data';
import { page320Data } from './Componants/Blog/Data/Page320Data.js';
import { Page319Data } from './Componants/Blog/Data/Page319Data.js';
import { Page318Dat} from './Componants/Blog/Data/Page318Data.js';
import { Page317Data } from './Componants/Blog/Data/Page317Data.js';
import { Page316Data } from './Componants/Blog/Data/Page316Data.js';
import { Page315Data} from './Componants/Blog/Data/Page315Data.js';
import { Page314Data } from './Componants/Blog/Data/Page314Data.js';
import { Page313Data } from './Componants/Blog/Data/Page313Data.js';
import { page89Data } from './Componants/Blog/Data/Page89Data.js';
import { Page311Data } from './Componants/Blog/Data/Page311Data.js';
import { Page310Data } from './Componants/Blog/Data/Page310Data.js';
import { Blog309Data} from './Componants/Blog/Data/Page309Data.js';
import { Page308Data} from './Componants/Blog/Data/Page308Data.js';
import { Page307Data } from './Componants/Blog/Data/Page307Data.js';
// import { page95Data } from './Componants/Blog/Data/Page306Data.js';
import { page305Data } from './Componants/Blog/Data/Page305Data.js';
import { Page304Data} from './Componants/Blog/Data/Page304Data.js';
import { page303Data } from './Componants/Blog/Data/Page303Data.js';
import { page302Data} from './Componants/Blog/Data/Page302Data.js';
import { page312Data } from './Componants/Blog/Data/Page312Data.js';
import { Page306Data } from './Componants/Blog/Data/Page306Data.js';
import { page301Data } from './Componants/Blog/Data/Page301Data.js';
import { page300Data } from './Componants/Blog/Data/Page300Data.js';
import { Page299Data } from './Componants/Blog/Data/Page299Data.js';
import { page298Data } from './Componants/Blog/Data/Page298Data.js';
import { page297Data } from './Componants/Blog/Data/Page297Data.js';
import { page296Data } from './Componants/Blog/Data/Page296Data.js';
import { page295Data } from './Componants/Blog/Data/Page295Data.js';
import { page294Data } from './Componants/Blog/Data/Page294Data.js';
import { page293Data } from './Componants/Blog/Data/Page293Data.js';
import { page292Data } from './Componants/Blog/Data/Page292Data.js';
import { page291Data } from './Componants/Blog/Data/Page291Data.js';
import { page290Data } from './Componants/Blog/Data/Page290Data.js';
import { page289Data } from './Componants/Blog/Data/Page289Data.js';
import { page288Data } from './Componants/Blog/Data/Page288Data.js';
import { page286Data } from './Componants/Blog/Data/Page286Data.js';
import { page287Data } from './Componants/Blog/Data/Page287Data.js';
import { page285Data } from './Componants/Blog/Data/Page285Data.js';
import { page284Data } from './Componants/Blog/Data/Page284Data.js';
import { page283Data } from './Componants/Blog/Data/Page283Data.js';
import { page282Data } from './Componants/Blog/Data/Page282Data.js';
import { page281Data } from './Componants/Blog/Data/Page281Data.js';
import { page239Data } from './Componants/Blog/Data/Page239Data.js';
import { page238Data } from './Componants/Blog/Data/Page238Data.js';
import { page237Data } from './Componants/Blog/Data/Page237Data.js';
import { page236Data } from './Componants/Blog/Data/Page236Data.js';
import { page235Data } from './Componants/Blog/Data/Page235Data.js';
import { page234Data } from './Componants/Blog/Data/Page234Data.js';
import { page233Data } from './Componants/Blog/Data/Page233Data.js';
import { page232Data } from './Componants/Blog/Data/Page232Data.js';
import { page231Data } from './Componants/Blog/Data/Page231Data.js';
import { page230Data } from './Componants/Blog/Data/Page230Data.js';
import { page229Data } from './Componants/Blog/Data/Page229Data.js';
import { page228Data } from './Componants/Blog/Data/Page228Data.js';
import { page227Data } from './Componants/Blog/Data/Page227Data.js';
import { page226Data } from './Componants/Blog/Data/Page226Data.js';
import { page225Data } from './Componants/Blog/Data/Page225Data.js';
import { page224Data } from './Componants/Blog/Data/Page224Data.js';
import { page223Data } from './Componants/Blog/Data/Page223Data.js';
import { page222Data } from './Componants/Blog/Data/Page222Data.js';
import { page221Data } from './Componants/Blog/Data/Page221Data.js';
import { page220Data } from './Componants/Blog/Data/Page220Data.js';
import { page219Data } from './Componants/Blog/Data/Page219Data.js';
import { page218Data } from './Componants/Blog/Data/Page218Data.js';
import { page217Data } from './Componants/Blog/Data/Page217Data.js';
import { page216Data } from './Componants/Blog/Data/Page216Data.js';
import { page215Data } from './Componants/Blog/Data/Page215Data.js';
import { page214Data } from './Componants/Blog/Data/Page214Data.js';
import { page213Data } from './Componants/Blog/Data/Page213Data.js';
import { page212Data } from './Componants/Blog/Data/Page212Data.js';
import { page211Data } from './Componants/Blog/Data/Page211Data.js';
import { page210Data } from './Componants/Blog/Data/Page210Data.js';
import { page209Data } from './Componants/Blog/Data/Page209Data.js';
import { page208Data } from './Componants/Blog/Data/Page208Data.js';
import { page207Data } from './Componants/Blog/Data/Page207Data.js';
import { page206Data } from './Componants/Blog/Data/Page206Data.js';
import { page205Data } from './Componants/Blog/Data/Page205Data.js';
import { page204Data } from './Componants/Blog/Data/Page204Data.js';
import { page203Data } from './Componants/Blog/Data/Page203Data.js';
import { page202Data } from './Componants/Blog/Data/Page202Data.js';
import { page201Data } from './Componants/Blog/Data/Page201Data.js';
import { page200Data } from './Componants/Blog/Data/Page200Data.js';
import BlogPageExpand5 from './Componants/Blog/BlogPageExpand5.js';
import { page199Data } from './Componants/Blog/Data/Page199Data.js';
import { page160Data } from './Componants/Blog/Data/Page160Data.js';
import { page198Data } from './Componants/Blog/Data/Page198Data.js';
import { page197Data } from './Componants/Blog/Data/Page197Data.js';
import { page196Data } from './Componants/Blog/Data/Page196Data.js';
import { page195Data } from './Componants/Blog/Data/Page195Data.js';
import { page194Data } from './Componants/Blog/Data/Page194Data.js';
import { page193Data } from './Componants/Blog/Data/Page193Data.js';
import { page192Data } from './Componants/Blog/Data/Page192Data.js';
import { page191Data } from './Componants/Blog/Data/Page191Data.js';
import { page190Data } from './Componants/Blog/Data/Page190Data.js';
import { page189Data } from './Componants/Blog/Data/Page189Data.js';
import { page188Data } from './Componants/Blog/Data/Page188Data.js';
import { page187Data } from './Componants/Blog/Data/Page187Data.js';
import { page186Data } from './Componants/Blog/Data/Page186Data.js';
import { page185Data } from './Componants/Blog/Data/Page185Data.js';
import { page184Data } from './Componants/Blog/Data/Page184Data.js';
import { page183Data } from './Componants/Blog/Data/Page183Data.js';
import { page182Data } from './Componants/Blog/Data/Page182Data.js';
import { page181Data } from './Componants/Blog/Data/Page181Data.js';
import { page180Data } from './Componants/Blog/Data/Page180Data.js';
import { page178Data } from './Componants/Blog/Data/Page178Data.js';
import { page179Data } from './Componants/Blog/Data/Page179Data.js';
import { page177Data } from './Componants/Blog/Data/Page177Data.js';
import { page176Data } from './Componants/Blog/Data/Page176Data.js';
import { page175Data } from './Componants/Blog/Data/Page175Data.js';
import { page174Data } from './Componants/Blog/Data/Page174Data.js';
import { page173Data } from './Componants/Blog/Data/Page173Data.js';
import { page172Data } from './Componants/Blog/Data/Page172Data.js';
import { page171Data } from './Componants/Blog/Data/Page171Data.js';
import { page170Data } from './Componants/Blog/Data/Page170Data.js';
import { page169Data } from './Componants/Blog/Data/Page169Data.js';
import { page168Data } from './Componants/Blog/Data/Page168Data.js';
import { page167Data } from './Componants/Blog/Data/Page167Data.js';
import { page166Data } from './Componants/Blog/Data/Page166Data.js';
import { page165Data } from './Componants/Blog/Data/Page165Data.js';
import { page159Data, page164Data } from './Componants/Blog/Data/Page159Data.js'



import Blog from './Componants/Blog/Blog';
import Contact from './Componants/Contact Us/Contact'
import BlogPageExpand1 from './Componants/Blog/BlogPageExpand1'
import BlogPageExpand2 from './Componants/Blog/BlogPageExpand2'
import { Page321Data } from './Componants/Blog/Data/Page321Data.js';
import { page322Data } from './Componants/Blog/Data/Page322Data.js';
import { page323Data } from './Componants/Blog/Data/Page323Data.js';
import { page324Data } from './Componants/Blog/Data/Page324Data.js';
import { page325Data } from './Componants/Blog/Data/Page325Data.js';
import { page326Data } from './Componants/Blog/Data/Page326Data.js';
import { page327Data } from './Componants/Blog/Data/Page327Data.js';
import { page328Data } from './Componants/Blog/Data/Page328Data.js';
import { page329Data } from './Componants/Blog/Data/Page329Data.js';
import { page330Data } from './Componants/Blog/Data/Page330Data.js';
import { page331Data } from './Componants/Blog/Data/Page331Data.js';
import { page332Data } from './Componants/Blog/Data/Page332Data.js';
import { page333Data } from './Componants/Blog/Data/Page333Data.js';
import { page334Data } from './Componants/Blog/Data/Page334Data.js';
import { page335Data } from './Componants/Blog/Data/Page335Data.js';
import { page336Data } from './Componants/Blog/Data/Page336Data.js';
import { page337Data } from './Componants/Blog/Data/Page337Data.js';
import { page338Data } from './Componants/Blog/Data/Page338Data.js';
import { page339Data } from './Componants/Blog/Data/Page339Data.js';
import { page340Data } from './Componants/Blog/Data/Page340Data.js';
import { page341Data } from './Componants/Blog/Data/Page341Data.js';
import { page342Data } from './Componants/Blog/Data/Page342Data.js';
import { page343Data } from './Componants/Blog/Data/Page343Data.js';
import { page344Data } from './Componants/Blog/Data/Page344Data.js';
import { page345Data } from './Componants/Blog/Data/Page345Data.js';
import { page346Data } from './Componants/Blog/Data/Page346Data.js';
import { page347Data } from './Componants/Blog/Data/Page347Data.js';
import { page348Data } from './Componants/Blog/Data/Page348Data.js';
import { page349Data } from './Componants/Blog/Data/Page349Data.js';
import { page350Data } from './Componants/Blog/Data/Page350Data.js';
import { page351Data } from './Componants/Blog/Data/Page351Data.js';
import { page352Data } from './Componants/Blog/Data/Page352Data.js';
import { page353Data } from './Componants/Blog/Data/Page353Data.js';
import { page354Data } from './Componants/Blog/Data/Page354Data.js';
import { page355Data } from './Componants/Blog/Data/Page355Data.js';
import { page356Data } from './Componants/Blog/Data/Page356Data.js';
import { page357Data } from './Componants/Blog/Data/Page357Data.js';
import { page358Data } from './Componants/Blog/Data/Page358Data.js';
import { page359Data } from './Componants/Blog/Data/Page359Data.js';
import { page360Data } from './Componants/Blog/Data/Page360Data.js';
import { page361Data } from './Componants/Blog/Data/Page361Data.js';
import { page364Data } from './Componants/Blog/Data/Page364Data.js';
import { page365Data } from './Componants/Blog/Data/Page365Data.js';
import { page366Data } from './Componants/Blog/Data/Page366Data.js';
import { page367Data } from './Componants/Blog/Data/Page367Data.js';
import { page368Data } from './Componants/Blog/Data/Page368Data.js';
import { page369Data } from './Componants/Blog/Data/Page369Data.js';
import { page370Data } from './Componants/Blog/Data/Page370Data.js';
import { page362Data } from './Componants/Blog/Data/Page362Data.js';
import { page363Data } from './Componants/Blog/Data/Page363Data.js';
import { page371Data } from './Componants/Blog/Data/Page371Data.js';
import { page372Data } from './Componants/Blog/Data/Page372Data.js';
import { page373Data } from './Componants/Blog/Data/Page373Data.js';
import { page400Data } from './Componants/Blog/Data/Page400Data.js';
import { page401Data } from './Componants/Blog/Data/Page401Data.js';
import { page402Data } from './Componants/Blog/Data/Page402Data.js';
import { page403Data } from './Componants/Blog/Data/Page403Data.js';
import { page404Data } from './Componants/Blog/Data/Page404Data.js';
import { page405Data } from './Componants/Blog/Data/Page405Data.js';
import { page406Data } from './Componants/Blog/Data/Page406Data.js';
import { page407Data } from './Componants/Blog/Data/Page407Data.js';
import { page408Data } from './Componants/Blog/Data/Page408Data.js';
import { page409Data } from './Componants/Blog/Data/Page409Data.js';
import { page410Data } from './Componants/Blog/Data/Page410Data.js';
import { page411Data } from './Componants/Blog/Data/Page411Data.js';
import { page417Data } from './Componants/Blog/Data/Page417Data.js';
import { page416Data } from './Componants/Blog/Data/Page416Data.js';
import { page418Data } from './Componants/Blog/Data/Page418Data.js';
import { page419Data } from './Componants/Blog/Data/Page419Data.js';
import { page420Data } from './Componants/Blog/Data/Page420Data.js';
import { page421Data } from './Componants/Blog/Data/Page421Data.js';
import { page422Data } from './Componants/Blog/Data/Page422Data.js';
import { page423Data } from './Componants/Blog/Data/Page423Data.js';
import { page424Data } from './Componants/Blog/Data/Page424Data.js';
import { page425Data } from './Componants/Blog/Data/Page425Data.js';
import { page426Data } from './Componants/Blog/Data/Page426Data.js';
import { page427Data } from './Componants/Blog/Data/Page427Data.js';
import { page428Data } from './Componants/Blog/Data/Page428Data.js';
import { page429Data } from './Componants/Blog/Data/Page429Data.js';
import { page430Data } from './Componants/Blog/Data/Page430Data.js';
import { page431Data } from './Componants/Blog/Data/Page431Data.js';
import { page432Data } from './Componants/Blog/Data/Page432Data.js';
import { page433Data } from './Componants/Blog/Data/Page433Data.js';
import { page434Data } from './Componants/Blog/Data/Page434Data.js';
import { page435Data } from './Componants/Blog/Data/Page435Data.js';
import { page436Data } from './Componants/Blog/Data/Page436Data.js';
import { page437Data } from './Componants/Blog/Data/Page437Data.js';
import { page438Data } from './Componants/Blog/Data/Page438Data.js';
import { page439Data } from './Componants/Blog/Data/Page439Data.js';
import { page440Data } from './Componants/Blog/Data/Page440Data.js';
import { page441Data } from './Componants/Blog/Data/Page441Data.js';
import { page442Data } from './Componants/Blog/Data/Page442Data.js';
import { page443Data } from './Componants/Blog/Data/Page443Data.js';
import { page444Data } from './Componants/Blog/Data/Page444Data.js';
import { page445Data } from './Componants/Blog/Data/Page445Data.js';
import { page446Data } from './Componants/Blog/Data/Page446Data.js';
import { page447Data } from './Componants/Blog/Data/Page447Data.js';
import { page448Data } from './Componants/Blog/Data/Page448Data.js';
import { page449Data } from './Componants/Blog/Data/Page449Data.js';
import { page450Data } from './Componants/Blog/Data/Page450Data.js';
import { page451Data } from './Componants/Blog/Data/Page451Data.js';
import { page452Data } from './Componants/Blog/Data/Page452Data.js';
import { page453Data } from './Componants/Blog/Data/Page453Data.js';
import { page454Data } from './Componants/Blog/Data/Page454Data.js';
import { page455Data } from './Componants/Blog/Data/Page455Data.js';
import { page456Data } from './Componants/Blog/Data/Page456Data.js';
import { page457Data } from './Componants/Blog/Data/Page457Data.js';
import { page458Data } from './Componants/Blog/Data/Page458Data.js';
import { page459Data } from './Componants/Blog/Data/Page459Data.js';
import { page460Data } from './Componants/Blog/Data/Page460Data.js';
import { page461Data } from './Componants/Blog/Data/Page461Data.js';
import { page462Data } from './Componants/Blog/Data/Page462Data.js';
import { page463Data } from './Componants/Blog/Data/Page463Data.js';
import { page464Data } from './Componants/Blog/Data/Page464Data.js';
import { page465Data } from './Componants/Blog/Data/Page465Data.js';
import { page466Data } from './Componants/Blog/Data/Page466Data.js';
import { page467Data } from './Componants/Blog/Data/Page467Data.js';
import { page468Data } from './Componants/Blog/Data/Page468Data.js';
import { page469Data } from './Componants/Blog/Data/Page469Data.js';
import { page470Data } from './Componants/Blog/Data/Page470Data.js';
import { page471Data } from './Componants/Blog/Data/Page471Data.js';
import { page472Data } from './Componants/Blog/Data/Page472Data.js';
import { page473Data } from './Componants/Blog/Data/Page473Data.js';
import { page474Data } from './Componants/Blog/Data/Page474Data.js';
import { page475Data } from './Componants/Blog/Data/Page475Data.js';
import { page476Data } from './Componants/Blog/Data/Page476Data.js';
import { page477Data } from './Componants/Blog/Data/Page477Data.js';
import { page478Data } from './Componants/Blog/Data/Page478Data.js';
import { page479Data } from './Componants/Blog/Data/Page479Data.js';
import { page480Data } from './Componants/Blog/Data/Page480Data.js';
import { page481Data } from './Componants/Blog/Data/Page481Data.js';
import { page482Data } from './Componants/Blog/Data/Page482Data.js';
import { page483Data } from './Componants/Blog/Data/Page483Data.js';
import { page484Data } from './Componants/Blog/Data/Page484Data.js';
import { page485Data } from './Componants/Blog/Data/Page485Data.js';
import { page486Data } from './Componants/Blog/Data/Page486Data.js';
import { page487Data } from './Componants/Blog/Data/Page487Data.js';
import { page488Data } from './Componants/Blog/Data/Page488Data.js';
import { page489Data } from './Componants/Blog/Data/Page489Data.js';
import { page490Data } from './Componants/Blog/Data/Page490Data.js';
import { page491Data } from './Componants/Blog/Data/Page491Data.js';
import { page492Data } from './Componants/Blog/Data/Page492Data.js';
import { page493Data } from './Componants/Blog/Data/Page493Data.js';
import { page494Data } from './Componants/Blog/Data/Page494Data.js';
import { page495Data } from './Componants/Blog/Data/Page495Data.js';
import { page496Data } from './Componants/Blog/Data/Page496Data.js';
import { page497Data } from './Componants/Blog/Data/Page497Data.js';
import { page498Data } from './Componants/Blog/Data/Page498Data.js';
import { page499Data } from './Componants/Blog/Data/Page499Data.js';
import { page500Data } from './Componants/Blog/Data/Page500Data.js';
import { page501Data } from './Componants/Blog/Data/Page501Data.js';
import { page502Data } from './Componants/Blog/Data/Page502Data.js';
import { page503Data } from './Componants/Blog/Data/Page503Data.js';
import { page504Data } from './Componants/Blog/Data/Page504Data.js';
import { page505Data } from './Componants/Blog/Data/Page505Data.js';
import { page506Data } from './Componants/Blog/Data/Page506Data.js';
import { page507Data } from './Componants/Blog/Data/Page507Data.js';
import { page508Data } from './Componants/Blog/Data/Page508Data.js';
import { page509Data } from './Componants/Blog/Data/Page509Data.js';
import { page510Data } from './Componants/Blog/Data/Page510Data.js';
import { page511Data } from './Componants/Blog/Data/Page511Data.js';
import { page512Data } from './Componants/Blog/Data/Page512Data.js';
import { page513Data } from './Componants/Blog/Data/Page513Data.js';
import { page514Data } from './Componants/Blog/Data/Page514Data.js';
import { page515Data } from './Componants/Blog/Data/Page515Data.js';
import { page516Data } from './Componants/Blog/Data/Page516Data.js';
import { page517ata } from './Componants/Blog/Data/Page517Data.js';
import { page518Data } from './Componants/Blog/Data/Page518Data.js';
import { page519Data } from './Componants/Blog/Data/Page519Data.js';
import { page521Data } from './Componants/Blog/Data/Page521Data.js';
import { page522Data } from './Componants/Blog/Data/Page522Data.js';
import { page523Data } from './Componants/Blog/Data/Page523Data.js';
import { page524Data } from './Componants/Blog/Data/Page524Data.js';
import { page520Data } from './Componants/Blog/Data/Page520Data.js';
import { page525Data } from './Componants/Blog/Data/Page525Data.js';
import { page526Data } from './Componants/Blog/Data/Page526Data.js';
import { page527Data } from './Componants/Blog/Data/Page527Data.js';
import { page528Data } from './Componants/Blog/Data/Page528Data.js';
import { page529Data } from './Componants/Blog/Data/Page529Data.js';
import { page530Data } from './Componants/Blog/Data/Page530Data.js';
import { page531Data } from './Componants/Blog/Data/Page531Data.js';
import { page532Data } from './Componants/Blog/Data/Page532Data.js';
import { page533Data } from './Componants/Blog/Data/Page533Data.js';
import { page534Data } from './Componants/Blog/Data/Page534Data.js';
import { page535Data } from './Componants/Blog/Data/Page535Data.js';
import { page536Data } from './Componants/Blog/Data/Page536Data.js';
import { page537Data } from './Componants/Blog/Data/Page537Data.js';
import { page538Data } from './Componants/Blog/Data/Page538Data.js';
import { page539Data } from './Componants/Blog/Data/Page539Data.js';
import { page540Data } from './Componants/Blog/Data/Page540Data.js';
import { page541Data } from './Componants/Blog/Data/Page541Data.js';
import { page542Data } from './Componants/Blog/Data/Page542Data.js';
import { page543Data } from './Componants/Blog/Data/Page543Data.js';
import { page544Data } from './Componants/Blog/Data/Page544Data.js';
import { page545Data } from './Componants/Blog/Data/Page545Data.js';
import { page546Data } from './Componants/Blog/Data/Page546Data.js';
import { page547Data } from './Componants/Blog/Data/Page547Data.js';
import { page548Data } from './Componants/Blog/Data/Page548Data.js';
import { page549Data } from './Componants/Blog/Data/Page549Data.js';
import { page550Data } from './Componants/Blog/Data/Page550Data.js';
import { page551Data } from './Componants/Blog/Data/Page551Data.js';
import { page552Data } from './Componants/Blog/Data/Page552Data.js';
import { page553Data } from './Componants/Blog/Data/Page553Data.js';
import { page554Data } from './Componants/Blog/Data/Page554Data.js';
import { page555Data } from './Componants/Blog/Data/Page555Data.js';
import { page556Data } from './Componants/Blog/Data/Page556Data.js';
import { page557Data } from './Componants/Blog/Data/Page557Data.js';
import { page558Data } from './Componants/Blog/Data/Page558Data.js';
import { page559Data } from './Componants/Blog/Data/Page559Data.js';
import { page560Data } from './Componants/Blog/Data/Page560Data.js';
import { page561Data } from './Componants/Blog/Data/Page561Data.js';
import { page562Data } from './Componants/Blog/Data/Page562Data.js';
import { page563Data } from './Componants/Blog/Data/Page563Data.js';
import { page564Data } from './Componants/Blog/Data/Page564Data.js';
import { page565Data } from './Componants/Blog/Data/Page565Data.js';
import { page566Data } from './Componants/Blog/Data/Page566Data.js';
import { page567Data } from './Componants/Blog/Data/Page567Data.js';
import { page568Data } from './Componants/Blog/Data/Page568Data.js';
import { page569Data } from './Componants/Blog/Data/Page569Data.js';
import { page570Data } from './Componants/Blog/Data/Page570Data.js';
import { page571Data } from './Componants/Blog/Data/Page571Data.js';
import { page572Data } from './Componants/Blog/Data/Page572Data.js';
import { page573Data } from './Componants/Blog/Data/Page573Data.js';
import { page574Data } from './Componants/Blog/Data/Page574Data.js';
import { page575Data } from './Componants/Blog/Data/Page575Data.js';
import { page576Data } from './Componants/Blog/Data/Page576Data.js';
import { page577Data } from './Componants/Blog/Data/Page577Data.js';
import { page578Data } from './Componants/Blog/Data/Page578Data.js';
import { page579Data } from './Componants/Blog/Data/Page579Data.js';
import { page580Data } from './Componants/Blog/Data/Page580Data.js';
import { page581Data } from './Componants/Blog/Data/Page581Data.js';
import { page582Data } from './Componants/Blog/Data/Page582Data.js';
import { page583Data } from './Componants/Blog/Data/Page583Data.js';
import { page584Data } from './Componants/Blog/Data/Page584Data.js';
import { page585Data } from './Componants/Blog/Data/Page585Data.js';
import { page586Data } from './Componants/Blog/Data/Page586Data.js';
import { page587Data } from './Componants/Blog/Data/Page587Data.js';
import { page588Data } from './Componants/Blog/Data/Page588Data.js';
import { page589Data } from './Componants/Blog/Data/Page589Data.js';
import { page590Data } from './Componants/Blog/Data/Page590Data.js';
import { page591Data } from './Componants/Blog/Data/Page591Data.js';
import { page592Data } from './Componants/Blog/Data/Page592Data.js';
import { page593Data } from './Componants/Blog/Data/Page593Data.js';
import { page594Data } from './Componants/Blog/Data/Page594Data.js';
import { page595Data } from './Componants/Blog/Data/Page595Data.js';
import { page596Data } from './Componants/Blog/Data/Page596Data.js';
import { page597Data } from './Componants/Blog/Data/Page597Data.js';
import { page598Data } from './Componants/Blog/Data/Page598Data.js';
import { page599Data } from './Componants/Blog/Data/Page599Data.js';
import { page600Data } from './Componants/Blog/Data/Page600Data.js';
import { page601Data } from './Componants/Blog/Data/Page601Data.js';
import { page602Data } from './Componants/Blog/Data/Page602Data.js';
import { page603Data } from './Componants/Blog/Data/Page603Data.js';
import { page604Data } from './Componants/Blog/Data/Page604Data.js';
import { page605Data } from './Componants/Blog/Data/Page605Data.js';
import { page606Data } from './Componants/Blog/Data/Page606Data.js';
import { page607Data } from './Componants/Blog/Data/Page607Data.js';
import { page608Data } from './Componants/Blog/Data/Page608Data.js';
import { page609Data } from './Componants/Blog/Data/Page609Data.js';
import { page610Data } from './Componants/Blog/Data/Page610Data.js';
import { page611Data } from './Componants/Blog/Data/Page611Data.js';
import { page612Data } from './Componants/Blog/Data/Page612Data.js';
import { page613Data } from './Componants/Blog/Data/Page613Data.js';
import { page614Data } from './Componants/Blog/Data/Page614Data.js';
import { page615Data } from './Componants/Blog/Data/Page615Data.js';
import { page616Data } from './Componants/Blog/Data/Page616Data.js';
import { page617Data } from './Componants/Blog/Data/Page617Data.js';
import { page618Data } from './Componants/Blog/Data/Page618Data.js';
import { page619Data } from './Componants/Blog/Data/Page619Data.js';
import { page620Data } from './Componants/Blog/Data/Page620Data.js';
import { page621Data } from './Componants/Blog/Data/Page621Data.js';
import { page622Data } from './Componants/Blog/Data/Page622Data.js';
import { page623Data } from './Componants/Blog/Data/Page623Data.js';
import { page624Data } from './Componants/Blog/Data/Page624Data.js';
import { page625Data } from './Componants/Blog/Data/Page625Data.js';
import { page626Data } from './Componants/Blog/Data/Page626Data.js';
import { page627Data } from './Componants/Blog/Data/Page627Data.js';
import { page628Data } from './Componants/Blog/Data/Page628Data.js';
import { page629Data } from './Componants/Blog/Data/Page629Data.js';
import { page630Data } from './Componants/Blog/Data/Page630Data.js';
import { page631Data } from './Componants/Blog/Data/Page631Data.js';
import { page632Data } from './Componants/Blog/Data/Page632Data.js';
import { page633Data } from './Componants/Blog/Data/Page633Data.js';
import { page634Data } from './Componants/Blog/Data/Page634Data.js';
import { page635Data } from './Componants/Blog/Data/Page635Data.js';
import { page636Data } from './Componants/Blog/Data/Page636Data.js';
import { page637Data } from './Componants/Blog/Data/Page637Data.js';
import { page638Data } from './Componants/Blog/Data/Page638Data.js';
import { page639Data } from './Componants/Blog/Data/Page639Data.js';
import { page640Data } from './Componants/Blog/Data/Page640Data.js';
import { page641Data } from './Componants/Blog/Data/Page641Data.js';
import { page642Data } from './Componants/Blog/Data/Page642Data.js';
import { page643Data } from './Componants/Blog/Data/Page643Data.js';
import { page644Data } from './Componants/Blog/Data/Page644Data.js';
import { page645Data } from './Componants/Blog/Data/Page645Data.js';
import { page646Data } from './Componants/Blog/Data/Page646Data.js';
import { page647Data } from './Componants/Blog/Data/Page647Data.js';
import { page648Data } from './Componants/Blog/Data/Page648Data.js';
import { page649Data } from './Componants/Blog/Data/Page649Data.js';
import { page650Data } from './Componants/Blog/Data/Page650Data.js';
import { page651Data } from './Componants/Blog/Data/Page651Data.js';
import { page652Data } from './Componants/Blog/Data/Page652Data.js';
import { page653Data } from './Componants/Blog/Data/Page653Data.js';
import { page654Data } from './Componants/Blog/Data/Page654Data.js';
import { page655Data } from './Componants/Blog/Data/Page655Data.js';
import { page656Data } from './Componants/Blog/Data/Page656Data.js';
import { page657Data } from './Componants/Blog/Data/Page657Data.js';
import { page658Data } from './Componants/Blog/Data/Page658Data.js';
import { page659Data } from './Componants/Blog/Data/Page659Data.js';
import { page660Data } from './Componants/Blog/Data/Page660Data.js';
import { page661Data } from './Componants/Blog/Data/Page661Data.js';
import { page662Data } from './Componants/Blog/Data/Page662Data.js';
import { page663Data } from './Componants/Blog/Data/Page663Data.js';
import { page664Data } from './Componants/Blog/Data/Page664Data.js';
import { page665Data } from './Componants/Blog/Data/Page665Data.js';
import { page666Data } from './Componants/Blog/Data/Page666Data.js';
import { page667Data } from './Componants/Blog/Data/Page667Data.js';
import { page668Data } from './Componants/Blog/Data/Page668Data.js';
import { page669Data } from './Componants/Blog/Data/Page669Data.js';
import { page670Data } from './Componants/Blog/Data/Page670Data.js';
import { page671Data } from './Componants/Blog/Data/Page671Data.js';
import { page672Data } from './Componants/Blog/Data/Page672Data.js';
import { page673Data } from './Componants/Blog/Data/Page673Data.js';
import { page674Data } from './Componants/Blog/Data/Page674Data.js';
import { page675Data } from './Componants/Blog/Data/Page675Data.js';
import { page676Data } from './Componants/Blog/Data/Page676Data.js';
import { page677Data } from './Componants/Blog/Data/Page677Data.js';
import { page678Data } from './Componants/Blog/Data/Page678Data.js';
import { page679Data } from './Componants/Blog/Data/Page679Data.js';
import { page680Data } from './Componants/Blog/Data/Page680Data.js';
import { page681Data } from './Componants/Blog/Data/Page681Data.js';
import { page682Data } from './Componants/Blog/Data/Page682Data.js';
import { page683Data } from './Componants/Blog/Data/Page683Data.js';
import { page684Data } from './Componants/Blog/Data/Page684Data.js';
import { page685Data } from './Componants/Blog/Data/Page685Data.js';
import { page686Data } from './Componants/Blog/Data/Page686Data.js';
import { page687Data } from './Componants/Blog/Data/Page687Data.js';
import { page688Data } from './Componants/Blog/Data/Page688Data.js';
import { page689Data } from './Componants/Blog/Data/Page689Data.js';
import { page690Data } from './Componants/Blog/Data/Page690Data.js';
import { page691Data } from './Componants/Blog/Data/Page691Data.js';
import { page692Data } from './Componants/Blog/Data/Page692Data.js';
import { page693Data } from './Componants/Blog/Data/Page693Data.js';
import { page694Data } from './Componants/Blog/Data/Page694Data.js';
import { page695Data } from './Componants/Blog/Data/Page695Data.js';
import { page696Data } from './Componants/Blog/Data/Page696Data.js';
import { page697Data } from './Componants/Blog/Data/Page697Data.js';
import { page698Data } from './Componants/Blog/Data/Page698Data.js';
import { page699Data } from './Componants/Blog/Data/Page699Data.js';
import { page700Data } from './Componants/Blog/Data/Page700Data.js';
import { page701Data } from './Componants/Blog/Data/Page701Data.js';
import { page702Data } from './Componants/Blog/Data/Page702Data.js';
import { page703Data } from './Componants/Blog/Data/Page703Data.js';
import { page704Data } from './Componants/Blog/Data/Page704Data.js';
import { page705Data } from './Componants/Blog/Data/Page705Data.js';
import { page706Data } from './Componants/Blog/Data/Page706Data.js';
import { page707Data } from './Componants/Blog/Data/Page707Data.js';
import { page708Data } from './Componants/Blog/Data/Page708Data.js';
import { page709Data } from './Componants/Blog/Data/Page709Data.js';
import { page710Data } from './Componants/Blog/Data/Page710Data.js';
import { page711Data } from './Componants/Blog/Data/Page711Data.js';
import { page712Data } from './Componants/Blog/Data/Page712Data.js';
import { page713Data } from './Componants/Blog/Data/Page713Data.js';
import { page714Data } from './Componants/Blog/Data/Page714Data.js';
import { page715Data } from './Componants/Blog/Data/Page715Data.js';
import { page716Data } from './Componants/Blog/Data/Page716Data.js';
import { page736Data } from './Componants/Blog/Data/Page736Data.js';
import { page737Data } from './Componants/Blog/Data/Page737Data.js';
import { page738Data } from './Componants/Blog/Data/Page738Data.js';
import { page739Data } from './Componants/Blog/Data/Page739Data.js';
import { page740Data } from './Componants/Blog/Data/Page740Data.js';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/project" element={<Project/>} />
          <Route path="/plan" element={<Plan/>} />
          <Route extact path="/blog" exact element = {<Blog/>} />
          <Route extact path="/blog1" exact element = {<BlogPageExpand1/>} />
          <Route extact path="/blog2" exact element = {<BlogPageExpand2/>} />
          <Route extact path="/contact" exact element = {<Contact/>} />
          <Route extact path="/blog/blog" exact element = {<Blog/>} />
          <Route exact path="/blog/page1" element={ <BlogPage data={page1Data} />} />
        <Route path="/blog/page2" element={ <BlogPage data={page2Data} />} />
        <Route path="/blog/page3" element={ <BlogPage data={page3Data} />} />
        <Route path="/blog/page4" element={ <BlogPage data={page4Data} />} />
        <Route path="/blog/page5" element={ <BlogPage data={page5Data} />} />
        <Route path="/blog/page6" element={ <BlogPage data={page6Data} />} />
        <Route path="/blog/page7" element={ <BlogPage data={page7Data} />} />
        <Route path="/blog/page8" element={ <BlogPage data={page8Data} />} />
        <Route path="/blog/page9" element={ <BlogPage data={page9Data} />} />
        <Route path="/blog/page10" element={ <BlogPage data={page10Data} />} />
        <Route path="/blog/page11" element={ <BlogPage data={page11Data} />} />
        <Route path="/blog/page12" element={ <BlogPage data={page12Data} />} />
        <Route path="/blog/page13" element={ <BlogPage data={page13Data} />} />
        <Route path="/blog/page14" element={ <BlogPage data={page14Data} />} />
        <Route path="/blog/page15" element={ <BlogPage data={page15Data} />} />
        <Route path="/blog/page16" element={ <BlogPage data={page16Data} />} />
        <Route path="/blog/page17" element={ <BlogPage data={page17Data} />} />
        <Route path="/blog/page18" element={ <BlogPage data={page18Data} />} />
        <Route path="/blog/page19" element={ <BlogPage data={page19Data} />} />
        <Route path="/blog/page20" element={ <BlogPage data={page20Data} />} />
        <Route path="/blog/page21" element={ <BlogPage data={page21Data} />} />
        <Route path="/blog/page22" element={ <BlogPage data={page22Data} />} />
        <Route path="/blog/page23" element={ <BlogPage data={page23Data} />} />
        <Route path="/blog/page24" element={ <BlogPage data={page24Data} />} />
        <Route path="/blog/page25" element={ <BlogPage data={page25Data} />} />
        <Route path="/blog/page26" element={ <BlogPage data={page26Data} />} />
        {/* <Route path="/blog/page27" element={ <BlogPage data={page27Data} />} /> */}
        <Route path="/blog/page28" element={ <BlogPage data={page28Data} />} />
        <Route path="/blog/page29" element={ <BlogPage data={page29Data} />} />
        <Route path="/blog/page30" element={ <BlogPage data={page30Data} />} />
        <Route path="/blog/page31" element={ <BlogPage data={page31Data} />} />
        <Route path="/blog/page32" element={ <BlogPage data={page32Data} />} />
        <Route path="/blog/page33" element={ <BlogPage data={page33Data} />} />
        <Route path="/blog/page34" element={ <BlogPage data={page34Data} />} />
        <Route path="/blog/page35" element={ <BlogPage data={page35Data} />} />
        <Route path="/blog/page36" element={ <BlogPage data={page36Data} />} />
        <Route path="/blog/page37" element={ <BlogPage data={page37Data} />} />
        <Route path="/blog/page38" element={ <BlogPage data={page38Data} />} />
        <Route path="/blog/page39" element={ <BlogPage data={page39Data} />} />
        <Route path="/blog/page40" element={ <BlogPage data={page40Data} />} />
        <Route path="/blog/page41" element={ <BlogPage data={page41Data} />} />
        <Route path="/blog/page42" element={ <BlogPage data={page42Data} />} />
        <Route path="/blog/page43" element={ <BlogPage data={page43Data} />} />
        <Route path="/blog/page44" element={ <BlogPage data={page44Data} />} />
        <Route path="/blog/page45" element={ <BlogPage data={page45Data} />} />
        {/* BlogpageExpand 2  */}
        <Route path="/blog/page46" element={ <BlogPage data={page46Data} />} />
        <Route path="/blog/page47" element={ <BlogPage data={page47Data} />} />
        <Route path="/blog/page48" element={ <BlogPage data={page48Data} />} />
        <Route path="/blog/page49" element={ <BlogPage data={page49Data} />} />
        <Route path="/blog/page50" element={ <BlogPage data={page50Data} />} />
        <Route path="/blog/page51" element={ <BlogPage data={page51Data} />} />
        <Route path="/blog/page52" element={ <BlogPage data={page52Data} />} />
        <Route path="/blog/page53" element={ <BlogPage data={page53Data} />} />
        <Route path="/blog/page54" element={ <BlogPage data={page54Data} />} />
        <Route path="/blog/page55" element={ <BlogPage data={page55Data} />} />
        <Route path="/blog/page56" element={ <BlogPage data={page56Data} />} />
        <Route path="/blog/page57" element={ <BlogPage data={page57Data} />} />
        <Route path="/blog/page58" element={ <BlogPage data={page58Data} />} />
        <Route path="/blog/page59" element={ <BlogPage data={page59Data} />} />
        <Route path="/blog/page60" element={ <BlogPage data={page60Data} />} />
        <Route path="/blog/page61" element={ <BlogPage data={page61Data} />} />
        <Route path="/blog/page62" element={ <BlogPage data={page62Data} />} />
        <Route path="/blog/page63" element={ <BlogPage data={page63Data} />} />
        <Route path="/blog/page64" element={ <BlogPage data={page64Data} />} />
        <Route path="/blog/page65" element={ <BlogPage data={page65Data} />} />
        <Route path="/blog/page66" element={ <BlogPage data={page66Data} />} />
        <Route path="/blog/page67" element={ <BlogPage data={page67Data} />} />
        <Route path="/blog/page68" element={ <BlogPage data={page68Data} />} />
        <Route path="/blog/page69" element={ <BlogPage data={page69Data} />} />
        <Route path="/blog/page70" element={ <BlogPage data={page70Data} />} />
        <Route path="/blog/page71" element={ <BlogPage data={page71Data} />} />
        <Route path="/blog/page72" element={ <BlogPage data={page72Data} />} />
        <Route path="/blog/page73" element={ <BlogPage data={page73Data} />} />
        <Route path="/blog/page74" element={ <BlogPage data={page74Data} />} />
        <Route path="/blog/page75" element={ <BlogPage data={page75Data} />} />
        <Route path="/blog/page76" element={ <BlogPage data={page76Data} />} />
        <Route path="/blog/page77" element={ <BlogPage data={page77Data} />} />
        <Route path="/blog/page78" element={ <BlogPage data={page78Data} />} />
        <Route path="/blog/page79" element={ <BlogPage data={page79Data} />} />
        <Route path="/blog/page80" element={ <BlogPage data={page80Data} />} />
        <Route path="/blog/page81" element={ <BlogPage data={page81Data} />} />
        <Route path="/blog/page82" element={ <BlogPage data={page82Data} />} />
        <Route path="/blog/page83" element={ <BlogPage data={page83Data} />} />
        <Route path="/blog/page84" element={ <BlogPage data={page84Data} />} />

        <Route path="/blog/page255" element={ <BlogPage data={page255Data} />} />
        <Route path="/blog/page256" element={ <BlogPage data={page256Data} />} />
        <Route path="/blog/page257" element={ <BlogPage data={page257Data} />} />
        <Route path="/blog/page258" element={ <BlogPage data={page258Data} />} />
        <Route path="/blog/page259" element={ <BlogPage data={page259Data} />} />
        <Route path="/blog/page260" element={ <BlogPage data={page260Data} />} />
        <Route path="/blog/page261" element={ <BlogPage data={page261Data} />} />
        <Route path="/blog/page262" element={ <BlogPage data={page262Data} />} />
        <Route path="/blog/page263" element={ <BlogPage data={page263Data} />} />
        <Route path="/blog/page264" element={ <BlogPage data={page264Data} />} />
        <Route path="/blog/page265" element={ <BlogPage data={page265Data} />} />
        <Route path="/blog/page266" element={ <BlogPage data={page266Data} />} />
        <Route path="/blog/page267" element={ <BlogPage data={page267Data} />} />
        <Route path="/blog/page268" element={ <BlogPage data={page268Data} />} />
        <Route path="/blog/page269" element={ <BlogPage data={page269Data} />} />
        <Route path="/blog/page270" element={ <BlogPage data={page270Data} />} />
        <Route path="/blog/page271" element={ <BlogPage data={page271Data} />} />
        <Route path="/blog/page272" element={ <BlogPage data={page272Data} />} />
        <Route path="/blog/page273" element={ <BlogPage data={page273Data} />} />
        <Route path="/blog/page274" element={ <BlogPage data={page274Data} />} />
        <Route path="/blog/page275" element={ <BlogPage data={page275Data} />} />
        <Route path="/blog/page276" element={ <BlogPage data={page276Data} />} />
        <Route path="/blog/page277" element={ <BlogPage data={page277Data} />} />
        <Route path="/blog/page278" element={ <BlogPage data={page278Data} />} />
        <Route path="/blog/page279" element={ <BlogPage data={page279Data} />} />
        <Route path="/blog/page280" element={ <BlogPage data={page280Data} />} />

        <Route path="/blog/page320" element={ <BlogPage data={page320Data} />} />
        <Route path="/blog/page319" element={ <BlogPage data={Page319Data} />} />
        <Route path="/blog/page318" element={ <BlogPage data={Page318Dat} />} />
        <Route path="/blog/page317" element={ <BlogPage data={Page317Data} />} />
        <Route path="/blog/page316" element={ <BlogPage data={Page316Data} />} />
        <Route path="/blog/page315" element={ <BlogPage data={Page315Data} />} />
        <Route path="/blog/page314" element={ <BlogPage data={Page314Data} />} />
        <Route path="/blog/page313" element={ <BlogPage data={Page313Data} />} />
        <Route path="/blog/page312" element={ <BlogPage data={page312Data} />} />
        <Route path="/blog/page311" element={ <BlogPage data={Page311Data} />} />
        <Route path="/blog/page310" element={ <BlogPage data={Page310Data} />} />
        <Route path="/blog/page309" element={ <BlogPage data={Blog309Data} />} />
        <Route path="/blog/page308" element={ <BlogPage data={Page308Data} />} />
        <Route path="/blog/page307" element={ <BlogPage data={Page307Data} />} />
        <Route path="/blog/page306" element={ <BlogPage data={Page306Data} />} />
        <Route path="/blog/page305" element={ <BlogPage data={page305Data} />} />
        <Route path="/blog/page304" element={ <BlogPage data={Page304Data} />} />
        <Route path="/blog/page303" element={ <BlogPage data={page303Data} />} />
        <Route path="/blog/page302" element={ <BlogPage data={page302Data} />} />
        <Route path="/blog/page301" element={ <BlogPage data={page301Data} />} />
        <Route path="/blog/page300" element={ <BlogPage data={page300Data} />} />
        <Route path="/blog/page299" element={ <BlogPage data={Page299Data} />} />
        <Route path="/blog/page298" element={ <BlogPage data={page298Data} />} />
        <Route path="/blog/page297" element={ <BlogPage data={page297Data} />} />
        <Route path="/blog/page296" element={ <BlogPage data={page296Data} />} />
        <Route path="/blog/page295" element={ <BlogPage data={page295Data} />} />
        <Route path="/blog/page294" element={ <BlogPage data={page294Data} />} />
        <Route path="/blog/page293" element={ <BlogPage data={page293Data} />} />
        <Route path="/blog/page292" element={ <BlogPage data={page292Data} />} />
        <Route path="/blog/page291" element={ <BlogPage data={page291Data} />} />
        <Route path="/blog/page290" element={ <BlogPage data={page290Data} />} />
        <Route path="/blog/page289" element={ <BlogPage data={page289Data} />} />
        <Route path="/blog/page288" element={ <BlogPage data={page288Data} />} />
        <Route path="/blog/page287" element={ <BlogPage data={page287Data} />} />
        <Route path="/blog/page286" element={ <BlogPage data={page286Data} />} />
        <Route path="/blog/page285" element={ <BlogPage data={page285Data}/>} />
        <Route path="/blog/page284" element={ <BlogPage data={page284Data}/>} />
        <Route path="/blog/page283" element={ <BlogPage data={page283Data}/>} />
        <Route path="/blog/page282" element={ <BlogPage data={page282Data}/>} />
        <Route path="/blog/page281" element={ <BlogPage data={page281Data}/>} />



        {/* form 239 to 200 */}
        <Route path="/blog/page239" element={ <BlogPage data={page239Data}/>} />
        <Route path="/blog/page238" element={ <BlogPage data={page238Data}/>} />
        <Route path="/blog/page237" element={ <BlogPage data={page237Data}/>} />
        <Route path="/blog/page236" element={ <BlogPage data={page236Data}/>} />
        <Route path="/blog/page235" element={ <BlogPage data={page235Data}/>} />
        <Route path="/blog/page234" element={ <BlogPage data={page234Data}/>} />
        <Route path="/blog/page233" element={ <BlogPage data={page233Data}/>} />
        <Route path="/blog/page232" element={ <BlogPage data={page232Data}/>} />
        <Route path="/blog/page231" element={ <BlogPage data={page231Data}/>} />
        <Route path="/blog/page230" element={ <BlogPage data={page230Data}/>} />
        <Route path="/blog/page229" element={ <BlogPage data={page229Data}/>} />
        <Route path="/blog/page228" element={ <BlogPage data={page228Data}/>} />
        <Route path="/blog/page226" element={ <BlogPage data={page226Data}/>} />
        <Route path="/blog/page225" element={ <BlogPage data={page225Data}/>} />
        <Route path="/blog/page224" element={ <BlogPage data={page224Data}/>} />
        <Route path="/blog/page223" element={ <BlogPage data={page223Data}/>} />
        <Route path="/blog/page222" element={ <BlogPage data={page222Data}/>} />
        <Route path="/blog/page221" element={ <BlogPage data={page221Data}/>} />
        <Route path="/blog/page220" element={ <BlogPage data={page220Data}/>} />
        <Route path="/blog/page219" element={ <BlogPage data={page219Data}/>} />
        <Route path="/blog/page218" element={ <BlogPage data={page218Data}/>} />
        <Route path="/blog/page217" element={ <BlogPage data={page217Data}/>} />
        <Route path="/blog/page216" element={ <BlogPage data={page216Data}/>} />
        <Route path="/blog/page215" element={ <BlogPage data={page215Data}/>} />
        <Route path="/blog/page214" element={ <BlogPage data={page214Data}/>} />
        <Route path="/blog/page213" element={ <BlogPage data={page213Data}/>} />
        <Route path="/blog/page212" element={ <BlogPage data={page212Data}/>} />
        <Route path="/blog/page211" element={ <BlogPage data={page211Data}/>} />
        <Route path="/blog/page210" element={ <BlogPage data={page210Data}/>} />
        <Route path="/blog/page209" element={ <BlogPage data={page209Data}/>} />
        <Route path="/blog/page208" element={ <BlogPage data={page208Data}/>} />
        <Route path="/blog/page207" element={ <BlogPage data={page207Data}/>} />
        <Route path="/blog/page207" element={ <BlogPage data={page207Data}/>} />
        <Route path="/blog/page206" element={ <BlogPage data={page206Data}/>} />
        <Route path="/blog/page206" element={ <BlogPage data={page206Data}/>} />
        <Route path="/blog/page205" element={ <BlogPage data={page205Data}/>} />
        <Route path="/blog/page204" element={ <BlogPage data={page204Data}/>} />
        <Route path="/blog/page203" element={ <BlogPage data={page203Data}/>} />
        <Route path="/blog/page202" element={ <BlogPage data={page202Data}/>} />
        <Route path="/blog/page201" element={ <BlogPage data={page201Data}/>} />
        <Route path="/blog/page200" element={ <BlogPage data={page200Data}/>} />


        {/* 160 to 200 */}
        <Route path="/blog/page199" element={ <BlogPage data={page199Data}/>} />
        <Route path="/blog/page198" element={ <BlogPage data={page198Data}/>} />
        <Route path="/blog/page197" element={ <BlogPage data={page197Data}/>} />
        <Route path="/blog/page196" element={ <BlogPage data={page196Data}/>} />
        <Route path="/blog/page195" element={ <BlogPage data={page195Data}/>} />
        <Route path="/blog/page194" element={ <BlogPage data={page194Data}/>} />
        <Route path="/blog/page193" element={ <BlogPage data={page193Data}/>} />
        <Route path="/blog/page192" element={ <BlogPage data={page192Data}/>} />
        <Route path="/blog/page191" element={ <BlogPage data={page191Data}/>} />
        <Route path="/blog/page190" element={ <BlogPage data={page190Data}/>} />
        <Route path="/blog/page189" element={ <BlogPage data={page189Data}/>} />
        <Route path="/blog/page188" element={ <BlogPage data={page188Data}/>} />
        <Route path="/blog/page187" element={ <BlogPage data={page187Data}/>} />
        <Route path="/blog/page186" element={ <BlogPage data={page186Data}/>} />
        <Route path="/blog/page185" element={ <BlogPage data={page185Data}/>} />
        <Route path="/blog/page184" element={ <BlogPage data={page184Data}/>} />
        <Route path="/blog/page183" element={ <BlogPage data={page183Data}/>} />
        <Route path="/blog/page182" element={ <BlogPage data={page182Data}/>} />
        <Route path="/blog/page181" element={ <BlogPage data={page181Data}/>} />
        <Route path="/blog/page180" element={ <BlogPage data={page180Data}/>} />
        <Route path="/blog/page179" element={ <BlogPage data={page179Data}/>} />
        <Route path="/blog/page178" element={ <BlogPage data={page178Data}/>} />
        <Route path="/blog/page177" element={ <BlogPage data={page177Data}/>} />
        <Route path="/blog/page176" element={ <BlogPage data={page176Data}/>} />
        <Route path="/blog/page175" element={ <BlogPage data={page175Data}/>} />
        <Route path="/blog/page174" element={ <BlogPage data={page174Data}/>} />
        <Route path="/blog/page173" element={ <BlogPage data={page173Data}/>} />
        <Route path="/blog/page172" element={ <BlogPage data={page172Data}/>} />
        <Route path="/blog/page171" element={ <BlogPage data={page171Data}/>} />
        <Route path="/blog/page170" element={ <BlogPage data={page170Data}/>} />
        <Route path="/blog/page169" element={ <BlogPage data={page169Data}/>} />
        <Route path="/blog/page168" element={ <BlogPage data={page168Data}/>} />
        <Route path="/blog/page167" element={ <BlogPage data={page167Data}/>} />
        <Route path="/blog/page166" element={ <BlogPage data={page166Data}/>} />
        <Route path="/blog/page165" element={ <BlogPage data={page165Data}/>} />
        <Route path="/blog/page154" element={ <BlogPage data={page164Data}/>} />
        <Route path="/blog/page160" element={ <BlogPage data={page160Data}/>} />

        {/* 321 to 450 */}
        <Route path='/blog/page321' element={<BlogPage data={Page321Data}/>} />
        <Route path='/blog/page322' element={<BlogPage data={page322Data}/>} />
        <Route path='/blog/page323' element={<BlogPage data={page323Data}/>} />
        <Route path='/blog/page324' element={<BlogPage data={page324Data}/>} />
        <Route path='/blog/page325' element={<BlogPage data={page325Data}/>} />
        <Route path='/blog/page326' element={<BlogPage data={page326Data}/>} />
        <Route path='/blog/page327' element={<BlogPage data={page327Data}/>} />
        <Route path='/blog/page328' element={<BlogPage data={page328Data}/>} />
        <Route path='/blog/page329' element={<BlogPage data={page329Data}/>} />
        <Route path='/blog/page330' element={<BlogPage data={page330Data}/>} />
        <Route path='/blog/page331' element={<BlogPage data={page331Data}/>} />
        <Route path='/blog/page332' element={<BlogPage data={page332Data}/>} />
        <Route path='/blog/page333' element={<BlogPage data={page333Data}/>} />
        <Route path='/blog/page334' element={<BlogPage data={page334Data}/>} />
        <Route path='/blog/page335' element={<BlogPage data={page335Data}/>} />
        <Route path='/blog/page336' element={<BlogPage data={page336Data}/>} />
        <Route path='/blog/page337' element={<BlogPage data={page337Data}/>} />
        <Route path='/blog/page338' element={<BlogPage data={page338Data}/>} />
        <Route path='/blog/page339' element={<BlogPage data={page339Data}/>} />
        <Route path='/blog/page340' element={<BlogPage data={page340Data}/>} />
        <Route path='/blog/page341' element={<BlogPage data={page341Data}/>} />
        <Route path='/blog/page342' element={<BlogPage data={page342Data}/>} />
        <Route path='/blog/page343' element={<BlogPage data={page343Data}/>} />
        <Route path='/blog/page344' element={<BlogPage data={page344Data}/>} />
        <Route path='/blog/page345' element={<BlogPage data={page345Data}/>} />
        <Route path='/blog/page346' element={<BlogPage data={page346Data}/>} />
        <Route path='/blog/page347' element={<BlogPage data={page347Data}/>} />
        <Route path='/blog/page348' element={<BlogPage data={page348Data}/>} />
        <Route path='/blog/page349' element={<BlogPage data={page349Data}/>} />
        <Route path='/blog/page350' element={<BlogPage data={page350Data}/>} />
        <Route path='/blog/page351' element={<BlogPage data={page351Data}/>} />
        <Route path='/blog/page352' element={<BlogPage data={page352Data}/>} />
        <Route path='/blog/page353' element={<BlogPage data={page353Data}/>} />
        <Route path='/blog/page354' element={<BlogPage data={page354Data}/>} />
        <Route path='/blog/page355' element={<BlogPage data={page355Data}/>} />
        <Route path='/blog/page356' element={<BlogPage data={page356Data}/>} />
        <Route path='/blog/page357' element={<BlogPage data={page357Data}/>} />
        <Route path='/blog/page358' element={<BlogPage data={page358Data}/>} />
        <Route path='/blog/page359' element={<BlogPage data={page359Data}/>} />
        <Route path='/blog/page360' element={<BlogPage data={page360Data}/>} />
        <Route path='/blog/page361' element={<BlogPage data={page361Data}/>} />
        <Route path='/blog/page362' element={<BlogPage data={page362Data}/>} />
        <Route path='/blog/page363' element={<BlogPage data={page363Data}/>}/>
        <Route path='/blog/page364' element={<BlogPage data={page364Data}/>}/>
        <Route path='/blog/page365' element={<BlogPage data={page365Data}/>} />
        <Route path='/blog/page366' element={<BlogPage data={page366Data}/>} />
        <Route path='/blog/page367' element={<BlogPage data={page367Data}/>} />
        <Route path='/blog/page368' element={<BlogPage data={page368Data}/>} />
        <Route path='/blog/page369' element={<BlogPage data={page369Data}/>} />
        <Route path='/blog/page370' element={<BlogPage data={page370Data}/>} />
        <Route path='/blog/page371' element={<BlogPage data={page371Data}/>}/>
        <Route path='/blog/page372' element={<BlogPage data={page372Data}/>}/>
        <Route path='/blog/page373' element={<BlogPage data={page373Data}/>}/>
        {/* <Route path='/blog/page374' element={<BlogPage data={}/>}/> */}
        
        
        
        {/* <Route path='/blog/page399' element={<BlogPage data={page399}/>}/> */}
        <Route path='/blog/page400' element={<BlogPage data={page400Data}/>}/>
        <Route path='/blog/page401' element={<BlogPage data={page401Data}/>}/>
        <Route path='/blog/page402' element={<BlogPage data={page402Data}/>}/>
        <Route path='/blog/page403' element={<BlogPage data={page403Data}/>}/>
        <Route path='/blog/page404' element={<BlogPage data={page404Data}/>}/>
        <Route path='/blog/page405' element={<BlogPage data={page405Data}/>}/>
        <Route path='/blog/page406' element={<BlogPage data={page406Data}/>}/>
        <Route path='/blog/page407' element={<BlogPage data={page407Data}/>}/>
        <Route path='/blog/page408' element={<BlogPage data={page408Data}/>}/>
        <Route path='/blog/page409' element={<BlogPage data={page409Data}/>}/>
        <Route path='/blog/page410' element={<BlogPage data={page410Data}/>}/>
        <Route path='/blog/page411' element={<BlogPage data={page411Data}/>}/>
        {/* <Route path='/blog/page412' element={<BlogPage data={page}/>}/> */}
        
        
        <Route path='/blog/page416' element={<BlogPage data={page416Data}/>}/>
        <Route path='/blog/page417' element={<BlogPage data={page417Data}/>}/>
        <Route path='/blog/page418' element={<BlogPage data={page418Data}/>}/>
        <Route path='/blog/page419' element={<BlogPage data={page419Data}/>}/>
        <Route path='/blog/page420' element={<BlogPage data={page420Data}/>}/>
        <Route path='/blog/page421' element={<BlogPage data={page421Data}/>}/>
        <Route path='/blog/page422' element={<BlogPage data={page422Data}/>}/>
        <Route path='/blog/page423' element={<BlogPage data={page423Data}/>}/>
        <Route path='/blog/page424' element={<BlogPage data={page424Data}/>}/>
        <Route path='/blog/page425' element={<BlogPage data={page425Data}/>}/>
        <Route path='/blog/page426' element={<BlogPage data={page426Data}/>}/>
        <Route path='/blog/page427' element={<BlogPage data={page427Data}/>}/>
        <Route path='/blog/page428' element={<BlogPage data={page428Data}/>}/>
        <Route path='/blog/page429' element={<BlogPage data={page429Data}/>}/>
        <Route path='/blog/page430' element={<BlogPage data={page430Data}/>}/>
        <Route path='/blog/page431' element={<BlogPage data={page431Data}/>}/>
        <Route path='/blog/page432' element={<BlogPage data={page432Data}/>}/>
        <Route path='/blog/page433' element={<BlogPage data={page433Data}/>}/>
        <Route path='/blog/page434' element={<BlogPage data={page434Data}/>}/>
        <Route path='/blog/page435' element={<BlogPage data={page435Data}/>}/>
        <Route path='/blog/page436' element={<BlogPage data={page436Data}/>}/>
        <Route path='/blog/page437' element={<BlogPage data={page437Data}/>}/>
        <Route path='/blog/page438' element={<BlogPage data={page438Data}/>}/>
        <Route path='/blog/page439' element={<BlogPage data={page439Data}/>}/>
        <Route path='/blog/page440' element={<BlogPage data={page440Data}/>}/>
        <Route path='/blog/page441' element={<BlogPage data={page441Data}/>}/>
        <Route path='/blog/page442' element={<BlogPage data={page442Data}/>}/>
        <Route path='/blog/page443' element={<BlogPage data={page443Data}/>}/>
        <Route path='/blog/page444' element={<BlogPage data={page444Data}/>}/>
        <Route path='/blog/page445' element={<BlogPage data={page445Data}/>}/>
        <Route path='/blog/page446' element={<BlogPage data={page446Data}/>}/>
        <Route path='/blog/page447' element={<BlogPage data={page447Data}/>}/>
        <Route path='/blog/page448' element={<BlogPage data={page448Data}/>}/>
        <Route path='/blog/page449' element={<BlogPage data={page449Data}/>}/>
        <Route path='/blog/page450' element={<BlogPage data={page450Data}/>}/>

        {/* form 450 to 850 */}
        <Route path='/blog/page451' element={<BlogPage data={page451Data}/>}/>
        <Route path='/blog/page452' element={<BlogPage data={page452Data}/>}/>
        <Route path='/blog/page453' element={<BlogPage data={page453Data}/>}/>
        <Route path='/blog/page454' element={<BlogPage data={page454Data}/>}/>
        <Route path='/blog/page455' element={<BlogPage data={page455Data}/>}/>
        <Route path='/blog/page456' element={<BlogPage data={page456Data}/>}/>
        <Route path='/blog/page457' element={<BlogPage data={page457Data}/>}/>
        <Route path='/blog/page458' element={<BlogPage data={page458Data}/>}/>
        <Route path='/blog/page459' element={<BlogPage data={page459Data}/>}/>
        <Route path='/blog/page460' element={<BlogPage data={page460Data}/>}/>
        <Route path='/blog/page461' element={<BlogPage data={page461Data}/>}/>
        <Route path='/blog/page462' element={<BlogPage data={page462Data}/>}/>
        <Route path='/blog/page463' element={<BlogPage data={page463Data}/>}/>
        <Route path='/blog/page464' element={<BlogPage data={page464Data}/>}/>
        <Route path='/blog/page465' element={<BlogPage data={page465Data}/>}/>
        <Route path='/blog/page466' element={<BlogPage data={page466Data}/>}/>
        <Route path='/blog/page467' element={<BlogPage data={page467Data}/>}/>
        <Route path='/blog/page468' element={<BlogPage data={page468Data}/>}/>
        <Route path='/blog/page469' element={<BlogPage data={page469Data}/>}/>
        <Route path='/blog/page470' element={<BlogPage data={page470Data}/>}/>
        <Route path='/blog/page471' element={<BlogPage data={page471Data}/>}/>
        <Route path='/blog/page472' element={<BlogPage data={page472Data}/>}/>
        <Route path='/blog/page473' element={<BlogPage data={page473Data}/>}/>
        <Route path='/blog/page474' element={<BlogPage data={page474Data}/>}/>
        <Route path='/blog/page475' element={<BlogPage data={page475Data}/>}/>
        <Route path='/blog/page476' element={<BlogPage data={page476Data}/>}/>
        <Route path='/blog/page477' element={<BlogPage data={page477Data}/>}/>
        <Route path='/blog/page478' element={<BlogPage data={page478Data}/>}/>
        <Route path='/blog/page479' element={<BlogPage data={page479Data}/>}/>
        <Route path='/blog/page480' element={<BlogPage data={page480Data}/>}/>
        <Route path='/blog/page481' element={<BlogPage data={page481Data}/>}/>
        <Route path='/blog/page482' element={<BlogPage data={page482Data}/>}/>
        <Route path='/blog/page483' element={<BlogPage data={page483Data}/>}/>
        <Route path='/blog/page484' element={<BlogPage data={page484Data}/>}/>
        <Route path='/blog/page485' element={<BlogPage data={page485Data}/>}/>
        <Route path='/blog/page486' element={<BlogPage data={page486Data}/>}/>
        <Route path='/blog/page487' element={<BlogPage data={page487Data}/>}/>
        <Route path='/blog/page488' element={<BlogPage data={page488Data}/>}/>
        <Route path='/blog/page489' element={<BlogPage data={page489Data}/>}/>
        <Route path='/blog/page490' element={<BlogPage data={page490Data}/>}/>
        <Route path='/blog/page491' element={<BlogPage data={page491Data}/>}/>
        <Route path='/blog/page492' element={<BlogPage data={page492Data}/>}/>
        <Route path='/blog/page493' element={<BlogPage data={page493Data}/>}/>
        <Route path='/blog/page494' element={<BlogPage data={page494Data}/>}/>
        <Route path='/blog/page495' element={<BlogPage data={page495Data}/>}/>
        <Route path='/blog/page496' element={<BlogPage data={page496Data}/>}/>
        <Route path='/blog/page497' element={<BlogPage data={page497Data}/>}/>
        <Route path='/blog/page498' element={<BlogPage data={page498Data}/>}/>
        <Route path='/blog/page499' element={<BlogPage data={page499Data}/>}/>
        <Route path='/blog/page500' element={<BlogPage data={page500Data}/>}/>
        <Route path='/blog/page501' element={<BlogPage data={page501Data}/>}/>
        <Route path='/blog/page502' element={<BlogPage data={page502Data}/>}/>
        <Route path='/blog/page503' element={<BlogPage data={page503Data}/>}/>
        <Route path='/blog/page504' element={<BlogPage data={page504Data}/>}/>
        <Route path='/blog/page505' element={<BlogPage data={page505Data}/>}/>
        <Route path='/blog/page506' element={<BlogPage data={page506Data}/>}/>
        <Route path='/blog/page507' element={<BlogPage data={page507Data}/>}/>
        <Route path='/blog/page508' element={<BlogPage data={page508Data}/>}/>
        <Route path='/blog/page509' element={<BlogPage data={page509Data}/>}/>
        <Route path='/blog/page510' element={<BlogPage data={page510Data}/>}/>
        <Route path='/blog/page511' element={<BlogPage data={page511Data}/>}/>
        <Route path='/blog/page512' element={<BlogPage data={page512Data}/>}/>
        <Route path='/blog/page513' element={<BlogPage data={page513Data}/>}/>
        <Route path='/blog/page514' element={<BlogPage data={page514Data}/>}/>
        <Route path='/blog/page515' element={<BlogPage data={page515Data}/>}/>
        <Route path='/blog/page516' element={<BlogPage data={page516Data}/>}/>
        <Route path='/blog/page517' element={<BlogPage data={page517ata}/>}/>
        <Route path='/blog/page518' element={<BlogPage data={page518Data}/>}/>
        <Route path='/blog/page519' element={<BlogPage data={page519Data}/>}/>
        <Route path='/blog/page520' element={<BlogPage data={page520Data}/>}/>
        <Route path='/blog/page521' element={<BlogPage data={page521Data}/>}/>
        <Route path='/blog/page522' element={<BlogPage data={page522Data}/>}/>
        <Route path='/blog/page523' element={<BlogPage data={page523Data}/>}/>
        <Route path='/blog/page524' element={<BlogPage data={page524Data}/>}/>
        <Route path='/blog/page525' element={<BlogPage data={page525Data}/>}/>
        <Route path='/blog/page526' element={<BlogPage data={page526Data}/>}/>
        <Route path='/blog/page527' element={<BlogPage data={page527Data}/>}/>
        <Route path='/blog/page528' element={<BlogPage data={page528Data}/>}/>
        <Route path='/blog/page529' element={<BlogPage data={page529Data}/>}/>
        <Route path='/blog/page530' element={<BlogPage data={page530Data}/>}/>
        <Route path='/blog/page531' element={<BlogPage data={page531Data}/>}/>
        <Route path='/blog/page532' element={<BlogPage data={page532Data}/>}/>
        <Route path='/blog/page533' element={<BlogPage data={page533Data}/>}/>
        <Route path='/blog/page534' element={<BlogPage data={page534Data}/>}/>
        <Route path='/blog/page535' element={<BlogPage data={page535Data}/>}/>
        <Route path='/blog/page536' element={<BlogPage data={page536Data}/>}/>
        <Route path='/blog/page537' element={<BlogPage data={page537Data}/>}/>
        <Route path='/blog/page538' element={<BlogPage data={page538Data}/>}/>
        <Route path='/blog/page539' element={<BlogPage data={page539Data}/>}/>
        <Route path='/blog/page540' element={<BlogPage data={page540Data}/>}/>
        <Route path='/blog/page541' element={<BlogPage data={page541Data}/>}/>
        <Route path='/blog/page542' element={<BlogPage data={page542Data}/>}/>
        <Route path='/blog/page543' element={<BlogPage data={page543Data}/>}/>
        <Route path='/blog/page544' element={<BlogPage data={page544Data}/>}/>
        <Route path='/blog/page545' element={<BlogPage data={page545Data}/>}/>
        <Route path='/blog/page546' element={<BlogPage data={page546Data}/>}/>
        <Route path='/blog/page547' element={<BlogPage data={page547Data}/>}/>
        <Route path='/blog/page548' element={<BlogPage data={page548Data}/>}/>
        <Route path='/blog/page549' element={<BlogPage data={page549Data}/>}/>
        <Route path='/blog/page550' element={<BlogPage data={page550Data}/>}/>
        <Route path='/blog/page551' element={<BlogPage data={page551Data}/>}/>
        <Route path='/blog/page552' element={<BlogPage data={page552Data}/>}/>
        <Route path='/blog/page553' element={<BlogPage data={page553Data}/>}/>
        <Route path='/blog/page554' element={<BlogPage data={page554Data}/>}/>
        <Route path='/blog/page555' element={<BlogPage data={page555Data}/>}/>
        <Route path='/blog/page556' element={<BlogPage data={page556Data}/>}/>
        <Route path='/blog/page557' element={<BlogPage data={page557Data}/>}/>
        <Route path='/blog/page558' element={<BlogPage data={page558Data}/>}/>
        <Route path='/blog/page559' element={<BlogPage data={page559Data}/>}/>
        <Route path='/blog/page560' element={<BlogPage data={page560Data}/>}/>
        <Route path='/blog/page561' element={<BlogPage data={page561Data}/>}/>
        <Route path='/blog/page562' element={<BlogPage data={page562Data}/>}/>
        <Route path='/blog/page563' element={<BlogPage data={page563Data}/>}/>
        <Route path='/blog/page564' element={<BlogPage data={page564Data}/>}/>
        <Route path='/blog/page565' element={<BlogPage data={page565Data}/>}/>
        <Route path='/blog/page566' element={<BlogPage data={page566Data}/>}/>
        <Route path='/blog/page567' element={<BlogPage data={page567Data}/>}/>
        <Route path='/blog/page568' element={<BlogPage data={page568Data}/>}/>
        <Route path='/blog/page569' element={<BlogPage data={page569Data}/>}/>
        <Route path='/blog/page570' element={<BlogPage data={page570Data}/>}/>
        <Route path='/blog/page571' element={<BlogPage data={page571Data}/>}/>
        <Route path='/blog/page572' element={<BlogPage data={page572Data}/>}/>
        <Route path='/blog/page573' element={<BlogPage data={page573Data}/>}/>
        <Route path='/blog/page574' element={<BlogPage data={page574Data}/>}/>
        <Route path='/blog/page575' element={<BlogPage data={page575Data}/>}/>
        <Route path='/blog/page576' element={<BlogPage data={page576Data}/>}/>
        <Route path='/blog/page577' element={<BlogPage data={page577Data}/>}/>
        <Route path='/blog/page578' element={<BlogPage data={page578Data}/>}/>
        <Route path='/blog/page579' element={<BlogPage data={page579Data}/>}/>
        <Route path='/blog/page580' element={<BlogPage data={page580Data}/>}/>
        <Route path='/blog/page581' element={<BlogPage data={page581Data}/>}/>
        <Route path='/blog/page582' element={<BlogPage data={page582Data}/>}/>
        <Route path='/blog/page583' element={<BlogPage data={page583Data}/>}/>
        <Route path='/blog/page584' element={<BlogPage data={page584Data}/>}/>
        <Route path='/blog/page585' element={<BlogPage data={page585Data}/>}/>
        <Route path='/blog/page586' element={<BlogPage data={page586Data}/>}/>
        <Route path='/blog/page587' element={<BlogPage data={page587Data}/>}/>
        <Route path='/blog/page588' element={<BlogPage data={page588Data}/>}/>
        <Route path='/blog/page589' element={<BlogPage data={page589Data}/>}/>
        <Route path='/blog/page590' element={<BlogPage data={page590Data}/>}/>
        <Route path='/blog/page591' element={<BlogPage data={page591Data}/>}/>
        <Route path='/blog/page592' element={<BlogPage data={page592Data}/>}/>
        <Route path='/blog/page593' element={<BlogPage data={page593Data}/>}/>
        <Route path='/blog/page594' element={<BlogPage data={page594Data}/>}/>
        <Route path='/blog/page595' element={<BlogPage data={page595Data}/>}/>
        <Route path='/blog/page596' element={<BlogPage data={page596Data}/>}/>
        <Route path='/blog/page597' element={<BlogPage data={page597Data}/>}/>
        <Route path='/blog/page598' element={<BlogPage data={page598Data}/>}/>
        <Route path='/blog/page599' element={<BlogPage data={page599Data}/>}/>
        <Route path='/blog/page600' element={<BlogPage data={page600Data}/>}/>
        <Route path='/blog/page601' element={<BlogPage data={page601Data}/>}/>
        <Route path='/blog/page602' element={<BlogPage data={page602Data}/>}/>
        <Route path='/blog/page603' element={<BlogPage data={page603Data}/>}/>
        <Route path='/blog/page604' element={<BlogPage data={page604Data}/>}/>
        <Route path='/blog/page605' element={<BlogPage data={page605Data}/>}/>
        <Route path='/blog/page606' element={<BlogPage data={page606Data}/>}/>
        <Route path='/blog/page607' element={<BlogPage data={page607Data}/>}/>
        <Route path='/blog/page608' element={<BlogPage data={page608Data}/>}/>
        <Route path='/blog/page609' element={<BlogPage data={page609Data}/>}/>
        <Route path='/blog/page610' element={<BlogPage data={page610Data}/>}/>
        <Route path='/blog/page611' element={<BlogPage data={page611Data}/>}/>
        <Route path='/blog/page612' element={<BlogPage data={page612Data}/>}/>
        <Route path='/blog/page613' element={<BlogPage data={page613Data}/>}/>
        <Route path='/blog/page614' element={<BlogPage data={page614Data}/>}/>
        <Route path='/blog/page615' element={<BlogPage data={page615Data}/>}/>
        <Route path='/blog/page616' element={<BlogPage data={page616Data}/>}/>
        <Route path='/blog/page617' element={<BlogPage data={page617Data}/>}/>
        <Route path='/blog/page618' element={<BlogPage data={page618Data}/>}/>
        <Route path='/blog/page619' element={<BlogPage data={page619Data}/>}/>
        <Route path='/blog/page620' element={<BlogPage data={page620Data}/>}/>
        <Route path='/blog/page621' element={<BlogPage data={page621Data}/>}/>
        <Route path='/blog/page622' element={<BlogPage data={page622Data}/>}/>
        <Route path='/blog/page623' element={<BlogPage data={page623Data}/>}/>
        <Route path='/blog/page624' element={<BlogPage data={page624Data}/>}/>
        <Route path='/blog/page625' element={<BlogPage data={page625Data}/>}/>
        <Route path='/blog/page626' element={<BlogPage data={page626Data}/>}/>
        <Route path='/blog/page627' element={<BlogPage data={page627Data}/>}/>
        <Route path='/blog/page628' element={<BlogPage data={page628Data}/>}/>
        <Route path='/blog/page629' element={<BlogPage data={page629Data}/>}/>
        <Route path='/blog/page630' element={<BlogPage data={page630Data}/>}/>
        <Route path='/blog/page631' element={<BlogPage data={page631Data}/>}/>
        <Route path='/blog/page632' element={<BlogPage data={page632Data}/>}/>
        <Route path='/blog/page633' element={<BlogPage data={page633Data}/>}/>
        <Route path='/blog/page634' element={<BlogPage data={page634Data}/>}/>
        <Route path='/blog/page635' element={<BlogPage data={page635Data}/>}/>
        <Route path='/blog/page636' element={<BlogPage data={page636Data}/>}/>
        <Route path='/blog/page637' element={<BlogPage data={page637Data}/>}/>
        <Route path='/blog/page638' element={<BlogPage data={page638Data}/>}/>
        <Route path='/blog/page639' element={<BlogPage data={page639Data}/>}/>
        <Route path='/blog/page640' element={<BlogPage data={page640Data}/>}/>
        <Route path='/blog/page641' element={<BlogPage data={page641Data}/>}/>
        <Route path='/blog/page642' element={<BlogPage data={page642Data}/>}/>
        <Route path='/blog/page643' element={<BlogPage data={page643Data}/>}/>
        <Route path='/blog/page644' element={<BlogPage data={page644Data}/>}/>
        <Route path='/blog/page645' element={<BlogPage data={page645Data}/>}/>
        <Route path='/blog/page646' element={<BlogPage data={page646Data}/>}/>
        <Route path='/blog/page647' element={<BlogPage data={page647Data}/>}/>
        <Route path='/blog/page648' element={<BlogPage data={page648Data}/>}/>
        <Route path='/blog/page649' element={<BlogPage data={page649Data}/>}/>
        <Route path='/blog/page650' element={<BlogPage data={page650Data}/>}/>
        <Route path='/blog/page651' element={<BlogPage data={page651Data}/>}/>
        <Route path='/blog/page652' element={<BlogPage data={page652Data}/>}/>
        <Route path='/blog/page653' element={<BlogPage data={page653Data}/>}/>
        <Route path='/blog/page654' element={<BlogPage data={page654Data}/>}/>
        <Route path='/blog/page655' element={<BlogPage data={page655Data}/>}/>
        <Route path='/blog/page656' element={<BlogPage data={page656Data}/>}/>
        <Route path='/blog/page657' element={<BlogPage data={page657Data}/>}/>
        <Route path='/blog/page658' element={<BlogPage data={page658Data}/>}/>
        <Route path='/blog/page659' element={<BlogPage data={page659Data}/>}/>
        <Route path='/blog/page660' element={<BlogPage data={page660Data}/>}/>
        <Route path='/blog/page661' element={<BlogPage data={page661Data}/>}/>
        <Route path='/blog/page662' element={<BlogPage data={page662Data}/>}/>
        <Route path='/blog/page663' element={<BlogPage data={page663Data}/>}/>
        <Route path='/blog/page664' element={<BlogPage data={page664Data}/>}/>
        <Route path='/blog/page665' element={<BlogPage data={page665Data}/>}/>
        <Route path='/blog/page666' element={<BlogPage data={page666Data}/>}/>
        <Route path='/blog/page667' element={<BlogPage data={page667Data}/>}/>
        <Route path='/blog/page668' element={<BlogPage data={page668Data}/>}/>
        <Route path='/blog/page669' element={<BlogPage data={page669Data}/>}/>
        <Route path='/blog/page670' element={<BlogPage data={page670Data}/>}/>
        <Route path='/blog/page671' element={<BlogPage data={page671Data}/>}/>
        <Route path='/blog/page672' element={<BlogPage data={page672Data}/>}/>
        <Route path='/blog/page673' element={<BlogPage data={page673Data}/>}/>
        <Route path='/blog/page674' element={<BlogPage data={page674Data}/>}/>
        <Route path='/blog/page675' element={<BlogPage data={page675Data}/>}/>
        <Route path='/blog/page676' element={<BlogPage data={page676Data}/>}/>
        <Route path='/blog/page677' element={<BlogPage data={page677Data}/>}/>
        <Route path='/blog/page678' element={<BlogPage data={page678Data}/>}/>
        <Route path='/blog/page679' element={<BlogPage data={page679Data}/>}/>
        <Route path='/blog/page680' element={<BlogPage data={page680Data}/>}/>
        <Route path='/blog/page681' element={<BlogPage data={page681Data}/>}/>
        <Route path='/blog/page682' element={<BlogPage data={page682Data}/>}/>
        <Route path='/blog/page683' element={<BlogPage data={page683Data}/>}/>
        <Route path='/blog/page684' element={<BlogPage data={page684Data}/>}/>
        <Route path='/blog/page685' element={<BlogPage data={page685Data}/>}/>
        <Route path='/blog/page686' element={<BlogPage data={page686Data}/>}/>
        <Route path='/blog/page687' element={<BlogPage data={page687Data}/>}/>
        <Route path='/blog/page688' element={<BlogPage data={page688Data}/>}/>
        <Route path='/blog/page689' element={<BlogPage data={page689Data}/>}/>
        <Route path='/blog/page690' element={<BlogPage data={page690Data}/>}/>
        <Route path='/blog/page691' element={<BlogPage data={page691Data}/>}/>
        <Route path='/blog/page692' element={<BlogPage data={page692Data}/>}/>
        <Route path='/blog/page693' element={<BlogPage data={page693Data}/>}/>
        <Route path='/blog/page694' element={<BlogPage data={page694Data}/>}/>
        <Route path='/blog/page695' element={<BlogPage data={page695Data}/>}/>
        <Route path='/blog/page696' element={<BlogPage data={page696Data}/>}/>
        <Route path='/blog/page697' element={<BlogPage data={page697Data}/>}/>
        <Route path='/blog/page698' element={<BlogPage data={page698Data}/>}/>
        <Route path='/blog/page699' element={<BlogPage data={page699Data}/>}/>
        <Route path='/blog/page700' element={<BlogPage data={page700Data}/>}/>
        <Route path='/blog/page701' element={<BlogPage data={page701Data}/>}/>
        <Route path='/blog/page702' element={<BlogPage data={page702Data}/>}/>
        <Route path='/blog/page703' element={<BlogPage data={page703Data}/>}/>
        <Route path='/blog/page704' element={<BlogPage data={page704Data}/>}/>
        <Route path='/blog/page705' element={<BlogPage data={page705Data}/>}/>
        <Route path='/blog/page706' element={<BlogPage data={page706Data}/>}/>
        <Route path='/blog/page707' element={<BlogPage data={page707Data}/>}/>
        <Route path='/blog/page708' element={<BlogPage data={page708Data}/>}/>
        <Route path='/blog/page709' element={<BlogPage data={page709Data}/>}/>
        <Route path='/blog/page710' element={<BlogPage data={page710Data}/>}/>
        <Route path='/blog/page711' element={<BlogPage data={page711Data}/>}/>
        <Route path='/blog/page712' element={<BlogPage data={page712Data}/>}/>
        <Route path='/blog/page713' element={<BlogPage data={page713Data}/>}/>
        <Route path='/blog/page714' element={<BlogPage data={page714Data}/>}/>
        <Route path='/blog/page715' element={<BlogPage data={page715Data}/>}/>
        <Route path='/blog/page716' element={<BlogPage data={page716Data}/>}/>







        <Route path='/blog/page736' element={<BlogPage data={page736Data}/>}/>
        <Route path='/blog/page737' element={<BlogPage data={page737Data}/>}/>
        <Route path='/blog/page738' element={<BlogPage data={page738Data}/>}/>
        <Route path='/blog/page739' element={<BlogPage data={page739Data}/>}/>
        <Route path='/blog/page740' element={<BlogPage data={page740Data}/>}/>
        
        




        

        

        






















        








        
        
        


        




        

















        
        


        
        
        


        


        
        


        

        







        </Routes>
        <Footer/>
    
      </Router>

      
     
     
    </div>
  );
}

export default App;
