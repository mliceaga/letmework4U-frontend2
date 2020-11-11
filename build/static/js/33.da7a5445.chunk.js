(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1798:function(e,n,a){"use strict";a.r(n);var t=a(15),o=a(0),s=a.n(o),r=a(1033),c=a(1010),i=a(989),l=a(510),m=a(1175),u=a.n(m),p=Object(r.a)(function(e){return{close:{padding:e.spacing(.5)}}});n.default=function(){var e=p(),n=s.a.useState(!1),a=Object(t.a)(n,2),o=a[0],r=a[1];function m(e,n){"clickaway"!==n&&r(!1)}return s.a.createElement("div",null,s.a.createElement(c.a,{onClick:function(){r(!0)}},"Open simple snackbar"),s.a.createElement(i.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:o,autoHideDuration:6e3,onClose:m,ContentProps:{"aria-describedby":"message-id"},message:s.a.createElement("span",{id:"message-id"},"Note archived"),action:[s.a.createElement(c.a,{key:"undo",color:"secondary",size:"small",onClick:m},"UNDO"),s.a.createElement(l.a,{key:"close","aria-label":"Close",color:"inherit",className:e.close,onClick:m},s.a.createElement(u.a,null))]}))}},1799:function(e,n){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Button from '@material-ui/core/Button';\nimport Snackbar from '@material-ui/core/Snackbar';\nimport IconButton from '@material-ui/core/IconButton';\nimport CloseIcon from '@material-ui/icons/Close';\n\nconst useStyles = makeStyles(theme => ({\n  close: {\n    padding: theme.spacing(0.5),\n  },\n}));\n\nfunction SimpleSnackbar() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n\n  function handleClick() {\n    setOpen(true);\n  }\n\n  function handleClose(event, reason) {\n    if (reason === 'clickaway') {\n      return;\n    }\n\n    setOpen(false);\n  }\n\n  return (\n    <div>\n      <Button onClick={handleClick}>Open simple snackbar</Button>\n      <Snackbar\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'left',\n        }}\n        open={open}\n        autoHideDuration={6000}\n        onClose={handleClose}\n        ContentProps={{\n          'aria-describedby': 'message-id',\n        }}\n        message={<span id=\"message-id\">Note archived</span>}\n        action={[\n          <Button key=\"undo\" color=\"secondary\" size=\"small\" onClick={handleClose}>\n            UNDO\n          </Button>,\n          <IconButton\n            key=\"close\"\n            aria-label=\"Close\"\n            color=\"inherit\"\n            className={classes.close}\n            onClick={handleClose}\n          >\n            <CloseIcon />\n          </IconButton>,\n        ]}\n      />\n    </div>\n  );\n}\n\nexport default SimpleSnackbar;\n"},1800:function(e,n,a){"use strict";a.r(n);var t=a(15),o=a(186),s=a(0),r=a.n(s),c=a(3),i=a(1010),l=a(1801),m=a.n(l),u=a(1803),p=a.n(u),d=a(1262),h=a.n(d),b=a(1175),k=a.n(b),f=a(1059),g=a.n(f),C=a(341),v=a.n(C),y=a(510),S=a(989),E=a(497),B=a(1802),N=a.n(B),I=a(1033),w={success:m.a,warning:N.a,error:p.a,info:h.a},T=Object(I.a)(function(e){return{success:{backgroundColor:g.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:v.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}});function x(e){var n=T(),a=e.className,t=e.message,s=e.onClose,i=e.variant,l=Object(o.a)(e,["className","message","onClose","variant"]),m=w[i];return r.a.createElement(E.a,Object.assign({className:Object(c.a)(n[i],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:n.message},r.a.createElement(m,{className:Object(c.a)(n.icon,n.iconVariant)}),t),action:[r.a.createElement(y.a,{key:"close","aria-label":"Close",color:"inherit",onClick:s},r.a.createElement(k.a,{className:n.icon}))]},l))}var O=Object(I.a)(function(e){return{margin:{margin:e.spacing(1)}}});n.default=function(){var e=O(),n=r.a.useState(!1),a=Object(t.a)(n,2),o=a[0],s=a[1];function c(e,n){"clickaway"!==n&&s(!1)}return r.a.createElement("div",null,r.a.createElement(i.a,{variant:"outlined",className:e.margin,onClick:function(){s(!0)}},"Open success snackbar"),r.a.createElement(S.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:o,autoHideDuration:6e3,onClose:c},r.a.createElement(x,{onClose:c,variant:"success",message:"This is a success message!"})),r.a.createElement(x,{variant:"error",className:e.margin,message:"This is an error message!"}),r.a.createElement(x,{variant:"warning",className:e.margin,message:"This is a warning message!"}),r.a.createElement(x,{variant:"info",className:e.margin,message:"This is an information message!"}),r.a.createElement(x,{variant:"success",className:e.margin,message:"This is a success message!"}))}},1804:function(e,n){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport clsx from 'clsx';\nimport Button from '@material-ui/core/Button';\nimport CheckCircleIcon from '@material-ui/icons/CheckCircle';\nimport ErrorIcon from '@material-ui/icons/Error';\nimport InfoIcon from '@material-ui/icons/Info';\nimport CloseIcon from '@material-ui/icons/Close';\nimport green from '@material-ui/core/colors/green';\nimport amber from '@material-ui/core/colors/amber';\nimport IconButton from '@material-ui/core/IconButton';\nimport Snackbar from '@material-ui/core/Snackbar';\nimport SnackbarContent from '@material-ui/core/SnackbarContent';\nimport WarningIcon from '@material-ui/icons/Warning';\nimport { makeStyles } from '@material-ui/core/styles';\n\nconst variantIcon = {\n  success: CheckCircleIcon,\n  warning: WarningIcon,\n  error: ErrorIcon,\n  info: InfoIcon,\n};\n\nconst useStyles1 = makeStyles(theme => ({\n  success: {\n    backgroundColor: green[600],\n  },\n  error: {\n    backgroundColor: theme.palette.error.dark,\n  },\n  info: {\n    backgroundColor: theme.palette.primary.dark,\n  },\n  warning: {\n    backgroundColor: amber[700],\n  },\n  icon: {\n    fontSize: 20,\n  },\n  iconVariant: {\n    opacity: 0.9,\n    marginRight: theme.spacing(1),\n  },\n  message: {\n    display: 'flex',\n    alignItems: 'center',\n  },\n}));\n\nfunction MySnackbarContentWrapper(props) {\n  const classes = useStyles1();\n  const { className, message, onClose, variant, ...other } = props;\n  const Icon = variantIcon[variant];\n\n  return (\n    <SnackbarContent\n      className={clsx(classes[variant], className)}\n      aria-describedby=\"client-snackbar\"\n      message={\n        <span id=\"client-snackbar\" className={classes.message}>\n          <Icon className={clsx(classes.icon, classes.iconVariant)} />\n          {message}\n        </span>\n      }\n      action={[\n        <IconButton key=\"close\" aria-label=\"Close\" color=\"inherit\" onClick={onClose}>\n          <CloseIcon className={classes.icon} />\n        </IconButton>,\n      ]}\n      {...other}\n    />\n  );\n}\n\nMySnackbarContentWrapper.propTypes = {\n  className: PropTypes.string,\n  message: PropTypes.node,\n  onClose: PropTypes.func,\n  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,\n};\n\nconst useStyles2 = makeStyles(theme => ({\n  margin: {\n    margin: theme.spacing(1),\n  },\n}));\n\nfunction CustomizedSnackbars() {\n  const classes = useStyles2();\n  const [open, setOpen] = React.useState(false);\n\n  function handleClick() {\n    setOpen(true);\n  }\n\n  function handleClose(event, reason) {\n    if (reason === 'clickaway') {\n      return;\n    }\n\n    setOpen(false);\n  }\n\n  return (\n    <div>\n      <Button variant=\"outlined\" className={classes.margin} onClick={handleClick}>\n        Open success snackbar\n      </Button>\n      <Snackbar\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'left',\n        }}\n        open={open}\n        autoHideDuration={6000}\n        onClose={handleClose}\n      >\n        <MySnackbarContentWrapper\n          onClose={handleClose}\n          variant=\"success\"\n          message=\"This is a success message!\"\n        />\n      </Snackbar>\n      <MySnackbarContentWrapper\n        variant=\"error\"\n        className={classes.margin}\n        message=\"This is an error message!\"\n      />\n      <MySnackbarContentWrapper\n        variant=\"warning\"\n        className={classes.margin}\n        message=\"This is a warning message!\"\n      />\n      <MySnackbarContentWrapper\n        variant=\"info\"\n        className={classes.margin}\n        message=\"This is an information message!\"\n      />\n      <MySnackbarContentWrapper\n        variant=\"success\"\n        className={classes.margin}\n        message=\"This is a success message!\"\n      />\n    </div>\n  );\n}\n\nexport default CustomizedSnackbars;\n"},1805:function(e,n,a){"use strict";a.r(n);var t=a(8),o=a(15),s=a(0),r=a.n(s),c=a(1010),i=a(989);n.default=function(){var e=r.a.useState({open:!1,vertical:"top",horizontal:"center"}),n=Object(o.a)(e,2),a=n[0],s=n[1],l=a.vertical,m=a.horizontal,u=a.open,p=function(e){return function(){s(Object(t.a)({open:!0},e))}};return r.a.createElement("div",null,r.a.createElement(c.a,{onClick:p({vertical:"top",horizontal:"center"})},"Top-Center"),r.a.createElement(c.a,{onClick:p({vertical:"top",horizontal:"right"})},"Top-Right"),r.a.createElement(c.a,{onClick:p({vertical:"bottom",horizontal:"right"})},"Bottom-Right"),r.a.createElement(c.a,{onClick:p({vertical:"bottom",horizontal:"center"})},"Bottom-Center"),r.a.createElement(c.a,{onClick:p({vertical:"bottom",horizontal:"left"})},"Bottom-Left"),r.a.createElement(c.a,{onClick:p({vertical:"top",horizontal:"left"})},"Top-Left"),r.a.createElement(i.a,{anchorOrigin:{vertical:l,horizontal:m},key:"".concat(l,",").concat(m),open:u,onClose:function(){s(Object(t.a)({},a,{open:!1}))},ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"I love snacks")}))}},1806:function(e,n){e.exports="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Snackbar from '@material-ui/core/Snackbar';\n\nfunction PositionedSnackbar() {\n  const [state, setState] = React.useState({\n    open: false,\n    vertical: 'top',\n    horizontal: 'center',\n  });\n\n  const { vertical, horizontal, open } = state;\n\n  const handleClick = newState => () => {\n    setState({ open: true, ...newState });\n  };\n\n  function handleClose() {\n    setState({ ...state, open: false });\n  }\n\n  return (\n    <div>\n      <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>Top-Center</Button>\n      <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>Top-Right</Button>\n      <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>\n        Bottom-Right\n      </Button>\n      <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>\n        Bottom-Center\n      </Button>\n      <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>Bottom-Left</Button>\n      <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>Top-Left</Button>\n      <Snackbar\n        anchorOrigin={{ vertical, horizontal }}\n        key={`${vertical},${horizontal}`}\n        open={open}\n        onClose={handleClose}\n        ContentProps={{\n          'aria-describedby': 'message-id',\n        }}\n        message={<span id=\"message-id\">I love snacks</span>}\n      />\n    </div>\n  );\n}\n\nexport default PositionedSnackbar;\n"},1807:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),s=a(1010),r=a(1033),c=a(497),i=o.a.createElement(s.a,{color:"secondary",size:"small"},"lorem ipsum dolorem"),l=Object(r.a)(function(e){return{root:{maxWidth:600},snackbar:{margin:e.spacing(1)}}});n.default=function(){var e=l();return o.a.createElement("div",{className:e.root},o.a.createElement(c.a,{className:e.snackbar,message:"I love snacks.",action:i}),o.a.createElement(c.a,{className:e.snackbar,message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate."}),o.a.createElement(c.a,{className:e.snackbar,message:"I love candy. I love cookies. I love cupcakes.",action:i}),o.a.createElement(c.a,{className:e.snackbar,message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate.",action:i}))}},1808:function(e,n){e.exports="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport { makeStyles } from '@material-ui/core/styles';\nimport SnackbarContent from '@material-ui/core/SnackbarContent';\n\nconst action = (\n  <Button color=\"secondary\" size=\"small\">\n    lorem ipsum dolorem\n  </Button>\n);\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    maxWidth: 600,\n  },\n  snackbar: {\n    margin: theme.spacing(1),\n  },\n}));\n\nfunction LongTextSnackbar() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <SnackbarContent className={classes.snackbar} message=\"I love snacks.\" action={action} />\n      <SnackbarContent\n        className={classes.snackbar}\n        message={\n          'I love candy. I love cookies. I love cupcakes. \\\n          I love cheesecake. I love chocolate.'\n        }\n      />\n      <SnackbarContent\n        className={classes.snackbar}\n        message=\"I love candy. I love cookies. I love cupcakes.\"\n        action={action}\n      />\n      <SnackbarContent\n        className={classes.snackbar}\n        message={\n          'I love candy. I love cookies. I love cupcakes. \\\n          I love cheesecake. I love chocolate.'\n        }\n        action={action}\n      />\n    </div>\n  );\n}\n\nexport default LongTextSnackbar;\n"},1809:function(e,n,a){"use strict";a.r(n);var t=a(42),o=a(43),s=a(73),r=a(72),c=a(74),i=a(0),l=a.n(i),m=a(7),u=a(1010),p=a(989),d=a(510),h=a(1175),b=a.n(h),k=function(e){function n(){var e,a;Object(t.a)(this,n);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(r.a)(n)).call.apply(e,[this].concat(c)))).queue=[],a.state={open:!1},a.handleClick=function(e){return function(){a.queue.push({message:e,key:(new Date).getTime()}),a.state.open?a.setState({open:!1}):a.processQueue()}},a.processQueue=function(){a.queue.length>0&&a.setState({messageInfo:a.queue.shift(),open:!0})},a.handleClose=function(e,n){"clickaway"!==n&&a.setState({open:!1})},a.handleExited=function(){a.processQueue()},a}return Object(c.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this.props.classes,n=this.state.messageInfo,a=void 0===n?{}:n;return l.a.createElement("div",null,l.a.createElement(u.a,{onClick:this.handleClick("Message A")},"Show message A"),l.a.createElement(u.a,{onClick:this.handleClick("Message B")},"Show message B"),l.a.createElement(p.a,{key:a.key,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose,onExited:this.handleExited,ContentProps:{"aria-describedby":"message-id"},message:l.a.createElement("span",{id:"message-id"},a.message),action:[l.a.createElement(u.a,{key:"undo",color:"secondary",size:"small",onClick:this.handleClose},"UNDO"),l.a.createElement(d.a,{key:"close","aria-label":"Close",color:"inherit",className:e.close,onClick:this.handleClose},l.a.createElement(b.a,null))]}))}}]),n}(l.a.Component);n.default=Object(m.a)(function(e){return{close:{padding:e.spacing(.5)}}})(k)},1810:function(e,n){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { withStyles } from '@material-ui/core/styles';\nimport Button from '@material-ui/core/Button';\nimport Snackbar from '@material-ui/core/Snackbar';\nimport IconButton from '@material-ui/core/IconButton';\nimport CloseIcon from '@material-ui/icons/Close';\n\nconst styles = theme => ({\n  close: {\n    padding: theme.spacing(0.5),\n  },\n});\n\nclass ConsecutiveSnackbars extends React.Component {\n  queue = [];\n\n  state = {\n    open: false,\n  };\n\n  handleClick = message => () => {\n    this.queue.push({\n      message,\n      key: new Date().getTime(),\n    });\n\n    if (this.state.open) {\n      // immediately begin dismissing current message\n      // to start showing new one\n      this.setState({ open: false });\n    } else {\n      this.processQueue();\n    }\n  };\n\n  processQueue = () => {\n    if (this.queue.length > 0) {\n      this.setState({\n        messageInfo: this.queue.shift(),\n        open: true,\n      });\n    }\n  };\n\n  handleClose = (event, reason) => {\n    if (reason === 'clickaway') {\n      return;\n    }\n    this.setState({ open: false });\n  };\n\n  handleExited = () => {\n    this.processQueue();\n  };\n\n  render() {\n    const { classes } = this.props;\n    const { messageInfo = {} } = this.state;\n\n    return (\n      <div>\n        <Button onClick={this.handleClick('Message A')}>Show message A</Button>\n        <Button onClick={this.handleClick('Message B')}>Show message B</Button>\n        <Snackbar\n          key={messageInfo.key}\n          anchorOrigin={{\n            vertical: 'bottom',\n            horizontal: 'left',\n          }}\n          open={this.state.open}\n          autoHideDuration={6000}\n          onClose={this.handleClose}\n          onExited={this.handleExited}\n          ContentProps={{\n            'aria-describedby': 'message-id',\n          }}\n          message={<span id=\"message-id\">{messageInfo.message}</span>}\n          action={[\n            <Button key=\"undo\" color=\"secondary\" size=\"small\" onClick={this.handleClose}>\n              UNDO\n            </Button>,\n            <IconButton\n              key=\"close\"\n              aria-label=\"Close\"\n              color=\"inherit\"\n              className={classes.close}\n              onClick={this.handleClose}\n            >\n              <CloseIcon />\n            </IconButton>,\n          ]}\n        />\n      </div>\n    );\n  }\n}\n\nConsecutiveSnackbars.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(ConsecutiveSnackbars);\n"},1811:function(e,n,a){"use strict";a.r(n);var t=a(27),o=a(0),s=a.n(o),r=a(1033),c=a(1002),i=a(1148),l=a(1011),m=a(510),u=a(1071),p=a.n(u),d=a(124),h=a(1010),b=a(1009),k=a(1099),f=a.n(k),g=a(989),C=Object(r.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.background.paper}},menuButton:{marginRight:e.spacing(2)},fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},snackbar:Object(t.a)({},e.breakpoints.down("xs"),{bottom:90})}});n.default=function(){var e=C();return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,null),s.a.createElement("div",null,s.a.createElement(c.a,{position:"static",color:"primary"},s.a.createElement(l.a,null,s.a.createElement(m.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"Menu"},s.a.createElement(p.a,null)),s.a.createElement(d.a,{variant:"h6",color:"inherit"},"App Bar"))),s.a.createElement(b.a,{color:"secondary",className:e.fab},s.a.createElement(f.a,null)),s.a.createElement(g.a,{open:!0,autoHideDuration:4e3,ContentProps:{"aria-describedby":"snackbar-fab-message-id"},message:s.a.createElement("span",{id:"snackbar-fab-message-id"},"Archived"),action:s.a.createElement(h.a,{color:"inherit",size:"small"},"Undo"),className:e.snackbar})))}},1812:function(e,n){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport AppBar from '@material-ui/core/AppBar';\nimport CssBaseline from '@material-ui/core/CssBaseline';\nimport Toolbar from '@material-ui/core/Toolbar';\nimport IconButton from '@material-ui/core/IconButton';\nimport MenuIcon from '@material-ui/icons/Menu';\nimport Typography from '@material-ui/core/Typography';\nimport Button from '@material-ui/core/Button';\nimport Fab from '@material-ui/core/Fab';\nimport AddIcon from '@material-ui/icons/Add';\nimport Snackbar from '@material-ui/core/Snackbar';\n\nconst useStyles = makeStyles(theme => ({\n  '@global': {\n    body: {\n      backgroundColor: theme.palette.background.paper,\n    },\n  },\n  menuButton: {\n    marginRight: theme.spacing(2),\n  },\n  fab: {\n    position: 'absolute',\n    bottom: theme.spacing(2),\n    right: theme.spacing(2),\n  },\n  snackbar: {\n    [theme.breakpoints.down('xs')]: {\n      bottom: 90,\n    },\n  },\n}));\n\nfunction FabIntegrationSnackbar() {\n  const classes = useStyles();\n\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      <div>\n        <AppBar position=\"static\" color=\"primary\">\n          <Toolbar>\n            <IconButton\n              edge=\"start\"\n              className={classes.menuButton}\n              color=\"inherit\"\n              aria-label=\"Menu\"\n            >\n              <MenuIcon />\n            </IconButton>\n            <Typography variant=\"h6\" color=\"inherit\">\n              App Bar\n            </Typography>\n          </Toolbar>\n        </AppBar>\n        <Fab color=\"secondary\" className={classes.fab}>\n          <AddIcon />\n        </Fab>\n        <Snackbar\n          open\n          autoHideDuration={4000}\n          ContentProps={{\n            'aria-describedby': 'snackbar-fab-message-id',\n          }}\n          message={<span id=\"snackbar-fab-message-id\">Archived</span>}\n          action={\n            <Button color=\"inherit\" size=\"small\">\n              Undo\n            </Button>\n          }\n          className={classes.snackbar}\n        />\n      </div>\n    </React.Fragment>\n  );\n}\n\nexport default FabIntegrationSnackbar;\n"},1813:function(e,n,a){"use strict";a.r(n);var t=a(8),o=a(15),s=a(0),r=a.n(s),c=a(1010),i=a(989),l=a(345),m=a(496),u=a(248);function p(e){return r.a.createElement(m.a,Object.assign({},e,{direction:"up"}))}function d(e){return r.a.createElement(u.a,e)}n.default=function(){var e=r.a.useState({open:!1,Transition:l.a}),n=Object(o.a)(e,2),a=n[0],s=n[1],m=function(e){return function(){s({open:!0,Transition:e})}};return r.a.createElement("div",null,r.a.createElement(c.a,{onClick:m(d)},"Grow Transition"),r.a.createElement(c.a,{onClick:m(l.a)},"Fade Transition"),r.a.createElement(c.a,{onClick:m(p)},"Slide Transition"),r.a.createElement(i.a,{open:a.open,onClose:function(){s(Object(t.a)({},a,{open:!1}))},TransitionComponent:a.Transition,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"I love snacks")}))}},1814:function(e,n){e.exports="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Snackbar from '@material-ui/core/Snackbar';\nimport Fade from '@material-ui/core/Fade';\nimport Slide from '@material-ui/core/Slide';\nimport Grow from '@material-ui/core/Grow';\n\nfunction SlideTransition(props) {\n  return <Slide {...props} direction=\"up\" />;\n}\n\nfunction GrowTransition(props) {\n  return <Grow {...props} />;\n}\n\nfunction TransitionsSnackbar() {\n  const [state, setState] = React.useState({\n    open: false,\n    Transition: Fade,\n  });\n\n  const handleClick = Transition => () => {\n    setState({\n      open: true,\n      Transition,\n    });\n  };\n\n  function handleClose() {\n    setState({\n      ...state,\n      open: false,\n    });\n  }\n\n  return (\n    <div>\n      <Button onClick={handleClick(GrowTransition)}>Grow Transition</Button>\n      <Button onClick={handleClick(Fade)}>Fade Transition</Button>\n      <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>\n      <Snackbar\n        open={state.open}\n        onClose={handleClose}\n        TransitionComponent={state.Transition}\n        ContentProps={{\n          'aria-describedby': 'message-id',\n        }}\n        message={<span id=\"message-id\">I love snacks</span>}\n      />\n    </div>\n  );\n}\n\nexport default TransitionsSnackbar;\n"},1815:function(e,n,a){"use strict";a.r(n);var t=a(42),o=a(43),s=a(73),r=a(72),c=a(74),i=a(0),l=a.n(i),m=a(1010),u=a(989),p=a(496);function d(e){return l.a.createElement(p.a,Object.assign({},e,{direction:"left"}))}function h(e){return l.a.createElement(p.a,Object.assign({},e,{direction:"up"}))}function b(e){return l.a.createElement(p.a,Object.assign({},e,{direction:"right"}))}function k(e){return l.a.createElement(p.a,Object.assign({},e,{direction:"down"}))}var f=function(e){function n(){var e,a;Object(t.a)(this,n);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(r.a)(n)).call.apply(e,[this].concat(c)))).state={open:!1},a.handleClick=function(e){return function(){a.setState({open:!0,Transition:e})}},a.handleClose=function(){a.setState({open:!1})},a}return Object(c.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m.a,{onClick:this.handleClick(d)},"Right"),l.a.createElement(m.a,{onClick:this.handleClick(h)},"Up"),l.a.createElement(m.a,{onClick:this.handleClick(b)},"Left"),l.a.createElement(m.a,{onClick:this.handleClick(k)},"Down"),l.a.createElement(u.a,{open:this.state.open,onClose:this.handleClose,TransitionComponent:this.state.Transition,ContentProps:{"aria-describedby":"message-id"},message:l.a.createElement("span",{id:"message-id"},"I love snacks")}))}}]),n}(l.a.Component);n.default=f},1816:function(e,n){e.exports="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Snackbar from '@material-ui/core/Snackbar';\nimport Slide from '@material-ui/core/Slide';\n\nfunction TransitionLeft(props) {\n  return <Slide {...props} direction=\"left\" />;\n}\n\nfunction TransitionUp(props) {\n  return <Slide {...props} direction=\"up\" />;\n}\n\nfunction TransitionRight(props) {\n  return <Slide {...props} direction=\"right\" />;\n}\n\nfunction TransitionDown(props) {\n  return <Slide {...props} direction=\"down\" />;\n}\n\nclass DirectionSnackbar extends React.Component {\n  state = {\n    open: false,\n  };\n\n  handleClick = Transition => () => {\n    this.setState({ open: true, Transition });\n  };\n\n  handleClose = () => {\n    this.setState({ open: false });\n  };\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.handleClick(TransitionLeft)}>Right</Button>\n        <Button onClick={this.handleClick(TransitionUp)}>Up</Button>\n        <Button onClick={this.handleClick(TransitionRight)}>Left</Button>\n        <Button onClick={this.handleClick(TransitionDown)}>Down</Button>\n        <Snackbar\n          open={this.state.open}\n          onClose={this.handleClose}\n          TransitionComponent={this.state.Transition}\n          ContentProps={{\n            'aria-describedby': 'message-id',\n          }}\n          message={<span id=\"message-id\">I love snacks</span>}\n        />\n      </div>\n    );\n  }\n}\n\nexport default DirectionSnackbar;\n"},1817:function(e,n,a){"use strict";a.r(n);var t=a(42),o=a(43),s=a(73),r=a(72),c=a(74),i=a(0),l=a.n(i),m=a(1010),u=a(1818),p=function(e){function n(){var e,a;Object(t.a)(this,n);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(r.a)(n)).call.apply(e,[this].concat(c)))).handleClick=function(){a.props.enqueueSnackbar("I love snacks.")},a.handleClickVariant=function(e){return function(){a.props.enqueueSnackbar("This is a warning message!",{variant:e})}},a}return Object(c.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{onClick:this.handleClick},"Show snackbar"),l.a.createElement(m.a,{onClick:this.handleClickVariant("warning")},"Show warning snackbar"))}}]),n}(l.a.Component),d=Object(u.withSnackbar)(p);n.default=function(){return l.a.createElement(u.SnackbarProvider,{maxSnack:3},l.a.createElement(d,null))}},1827:function(e,n){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport Button from '@material-ui/core/Button';\nimport { SnackbarProvider, withSnackbar } from 'notistack';\n\nclass App extends React.Component {\n  handleClick = () => {\n    this.props.enqueueSnackbar('I love snacks.');\n  };\n\n  handleClickVariant = variant => () => {\n    // variant could be success, error, warning, info, or default\n    this.props.enqueueSnackbar('This is a warning message!', { variant });\n  };\n\n  render() {\n    return (\n      <React.Fragment>\n        <Button onClick={this.handleClick}>Show snackbar</Button>\n        <Button onClick={this.handleClickVariant('warning')}>Show warning snackbar</Button>\n      </React.Fragment>\n    );\n  }\n}\n\nApp.propTypes = {\n  enqueueSnackbar: PropTypes.func.isRequired,\n};\n\nconst MyApp = withSnackbar(App);\n\nfunction IntegrationNotistack() {\n  return (\n    <SnackbarProvider maxSnack={3}>\n      <MyApp />\n    </SnackbarProvider>\n  );\n}\n\nexport default IntegrationNotistack;\n"},2183:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),s=a(12),r=a(992),c=a(124),i=a(1010),l=a(1030),m=Object(l.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});n.default=function(e){var n=m();return o.a.createElement(s.s,{classes:{root:n.layoutRoot},header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(r.a,{className:"text-18",color:"action"},"home"),o.a.createElement(r.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(c.a,{color:"textSecondary"},"Documentation"),o.a.createElement(r.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(c.a,{color:"textSecondary"},"Material UI Components")),o.a.createElement(c.a,{variant:"h6"},"Snackbars")),o.a.createElement(i.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/snackbars",target:"_blank"},o.a.createElement(r.a,{className:"mr-4"},"link"),"Reference")),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Snackbars"),o.a.createElement(c.a,{className:"description"},"Snackbars provide brief messages about app processes - typically at the bottom of the screen."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement("a",{href:"https://material.io/design/components/snackbars.html"},"Snackbars")," inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn\u2019t interrupt the user experience, and they don\u2019t require user input to disappear."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Snackbars contain a single line of text directly related to the operation performed. They may contain a text action, but no icons. You can use them to display notifications."),o.a.createElement(c.a,{className:"text-16 mt-32 mb-8",component:"h4"},"Frequency"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Only one snackbar may be displayed at a time."),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple snackbars"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"A basic snackbar that aims to reproduce Google Keep's snackbar behavior."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(s.j,{className:"my-24",iframe:!1,component:a(1798).default,raw:a(1799)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Customized snackbars"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Here are some examples of customizing the component. You can learn more about this in the",o.a.createElement("a",{href:"/customization/components/"},"overrides documentation page"),"."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(s.j,{className:"my-24",iframe:!1,component:a(1800).default,raw:a(1804)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Positioned snackbars"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"There may be circumstances when the placement of the snackbar needs to be more flexible."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(s.j,{className:"my-24",iframe:!1,component:a(1805).default,raw:a(1806)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Message Length"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Some snackbars with varying message length."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(s.j,{className:"my-24",iframe:!1,component:a(1807).default,raw:a(1808)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Transitions"),o.a.createElement(c.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Consecutive Snackbars"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"When multiple snackbar updates are necessary, they should appear one at a time."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(s.j,{className:"my-24",iframe:!1,component:a(1809).default,raw:a(1810)})),o.a.createElement(c.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Snackbars and floating action buttons (FABs)"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Snackbars should appear above FABs (on mobile)."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(s.j,{className:"my-24",iframe:!0,component:a(1811).default,raw:a(1812)})),o.a.createElement(c.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Change Transition"),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement("a",{href:"/components/transitions/#grow"},"Grow")," is the default transition but you can use a different one."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(s.j,{className:"my-24",iframe:!1,component:a(1813).default,raw:a(1814)})),o.a.createElement(c.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Control Slide direction"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"You can change the direction of the ",o.a.createElement("a",{href:"/components/transitions/#slide"},"Slide")," transition."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(s.j,{className:"my-24",iframe:!1,component:a(1815).default,raw:a(1816)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Complementary projects"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"For more advanced use cases you might be able to take advantage of:"),o.a.createElement(c.a,{className:"text-24 mt-32 mb-8",component:"h3"},"notistack"),o.a.createElement(c.a,{className:"mb-16",component:"div"},' src="https://img.shields.io/github/stars/iamhosseindhv/notistack.svg?style=social&label=Stars" alt="stars/> src="https://img.shields.io/npm/dm/notistack.svg" alt="npm downloads/>'),o.a.createElement(c.a,{className:"mb-16",component:"div"},"In the following example, we demonstrate how to use ",o.a.createElement("a",{href:"https://github.com/iamhosseindhv/notistack"},"notistack"),". notistack makes it easy to display snackbars (so you don't have to deal with open/close state of them). It also enables you to stack them on top of one another (but discouraged by the specification)."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(s.j,{className:"my-24",iframe:!1,component:a(1817).default,raw:a(1827)})))})}}}]);