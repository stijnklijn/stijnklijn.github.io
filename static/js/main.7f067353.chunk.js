(this.webpackJsonpjammming=this.webpackJsonpjammming||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n,s=a(1),c=a.n(s),r=a(8),i=a.n(r),o=(a(14),a(9)),l=a(3),h=a(4),u=a(2),d=a(6),p=a(5),m=(a(15),a(16),a(0)),j=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={term:""},n.search=n.search.bind(Object(u.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(t){this.setState({term:t.target.value})}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"SearchBar",children:[Object(m.jsx)("input",{onChange:this.handleTermChange,placeholder:"Enter A Song, Album, or Artist"}),Object(m.jsx)("button",{onClick:this.search,className:"SearchButton",children:"SEARCH"})]})}}]),a}(c.a.Component),b=(a(18),a(19),a(20),function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"renderAction",value:function(){return this.props.isRemoval?Object(m.jsx)("button",{onClick:this.removeTrack,className:"Track-action",children:"-"}):Object(m.jsx)("button",{onClick:this.addTrack,className:"Track-action",children:"+"})}},{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Track",children:[Object(m.jsxs)("div",{className:"Track-information",children:[Object(m.jsx)("h3",{children:this.props.track.name}),Object(m.jsxs)("p",{children:[this.props.track.artist," | ",this.props.track.album]})]}),this.renderAction()]})}}]),a}(c.a.Component)),f=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this;return Object(m.jsx)("div",{className:"TrackList",children:this.props.tracks.map((function(e){return Object(m.jsx)(b,{track:e,onAdd:t.props.onAdd,onRemove:t.props.onRemove,isRemoval:t.props.isRemoval},e.id)}))})}}]),a}(c.a.Component),v=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"SearchResults",children:[Object(m.jsx)("h2",{children:"Results"}),Object(m.jsx)(f,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1})]})}}]),a}(c.a.Component),k=(a(21),function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).handleNameChange=n.handleNameChange.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"handleNameChange",value:function(t){this.props.onNameChange(t.target.value)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Playlist",children:[Object(m.jsx)("input",{defaultValue:"New Playlist",onChange:this.handleNameChange}),Object(m.jsx)(f,{tracks:this.props.playlistTracks,onRemove:this.props.onRemove,isRemoval:!0}),Object(m.jsx)("button",{onClick:this.props.onSave,className:"Playlist-save",children:"SAVE TO SPOTIFY"})]})}}]),a}(c.a.Component)),y={getAccessToken:function(){if(n)return n;var t=window.location.href.match(/access_token=([^&]*)/),e=window.location.href.match(/expires_in=([^&]*)/);if(t&&e){n=t[1];var a=Number(e[1]);return window.setTimeout((function(){return n=""}),1e3*a),window.history.pushState("Access Token",null,"/"),n}var s="https://accounts.spotify.com/authorize?client_id=".concat("fc44535f1ff243f98d9004019fa88d9b","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("https://stijnklijn.github.io/");window.location=s},search:function(t){var e=y.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(t),{headers:{Authorization:"Bearer "+e}}).then((function(t){return t.json()})).then((function(t){return t.tracks?t.tracks.items.map((function(t){return{id:t.id,name:t.name,artist:t.artists[0].name,album:t.album.name,uri:t.uri}})):[]}))},savePlaylist:function(t,e){if(t&&e.length){var a,n={Authorization:"Bearer "+y.getAccessToken()};return fetch("https://api.spotify.com/v1/me",{headers:n}).then((function(t){return t.json()})).then((function(s){return a=s.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists"),{headers:n,method:"POST",body:JSON.stringify({name:t})}).then((function(t){return t.json()})).then((function(t){var s=t.id;return fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists/").concat(s,"/tracks"),{headers:n,method:"POST",body:JSON.stringify({uris:e})})}))}))}}},O=y,T=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={searchResults:[],playlistName:"New Playlist",playlistTracks:[]},n.addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(u.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(u.a)(n)),n.search=n.search.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"addTrack",value:function(t){var e,a=this.state.playlistTracks,n=Object(o.a)(a);try{for(n.s();!(e=n.n()).done;){if(e.value.id===t.id)return}}catch(s){n.e(s)}finally{n.f()}a.push(t),this.setState({playlistTracks:a})}},{key:"removeTrack",value:function(t){var e=this.state.playlistTracks;e=e.filter((function(e){return e.id!==t.id})),this.setState({playlistTracks:e})}},{key:"updatePlaylistName",value:function(t){this.setState({playlistName:t})}},{key:"savePlaylist",value:function(){var t=this,e=this.state.playlistTracks.map((function(t){return t.uri}));O.savePlaylist(this.state.playlistName,e).then((function(){t.setState({playlistName:"New Playlist",playlistTracks:[]})}))}},{key:"search",value:function(t){var e=this;O.search(t).then((function(t){return e.setState({searchResults:t})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:["Ja",Object(m.jsx)("span",{className:"highlight",children:"mmm"}),"ing"]}),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j,{onSearch:this.search}),Object(m.jsxs)("div",{className:"App-playlist",children:[Object(m.jsx)(v,{searchResults:this.state.searchResults,onAdd:this.addTrack}),Object(m.jsx)(k,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onNameChange:this.updatePlaylistName,onRemove:this.removeTrack,onSave:this.savePlaylist})]})]})]})}}]),a}(c.a.Component),N=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;a(t),n(t),s(t),c(t),r(t)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root")),N()}],[[22,1,2]]]);
//# sourceMappingURL=main.7f067353.chunk.js.map