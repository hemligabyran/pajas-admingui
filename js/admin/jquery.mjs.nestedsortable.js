


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>nestedSortable/jquery.mjs.nestedSortable.js at master · mjsarfatti/nestedSortable</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe122-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.36) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="53F1A372:3B8E:5E72299:52550766" name="octolytics-dimension-request_id" /><meta content="2510783" name="octolytics-actor-id" /><meta content="029" name="octolytics-actor-login" /><meta content="5604c4504d2ddadb1728837ced7b55faa7695dda4d81a1aa34a115fe931b5837" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="+ysblDb4aqzX7RoHOwPgmfOVGjzr2HIpb/qsyXXSs18=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-36a739f363b4b05a1420c5047e7a3589117a465f.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-2c50a5e9876e57298f41ce245404978c1e9cfa79.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-3e962e599763b7c5f9668b8c1f3a968b7ebf72e9.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-b89d443272952d6c2b63c9ac0a721b45f45dc3ec.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="71607a30c59805ceafb50ee1522711f0">

        <link data-pjax-transient rel='permalink' href='/mjsarfatti/nestedSortable/blob/cf72a2526e2d0263fde7d5df063d0747a201545f/jquery.mjs.nestedSortable.js'>
  <meta property="og:title" content="nestedSortable"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/mjsarfatti/nestedSortable"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="nestedSortable - A jQuery plugin that extends Sortable UI functionalities to nested lists."/>

  <meta name="description" content="nestedSortable - A jQuery plugin that extends Sortable UI functionalities to nested lists." />

  <meta content="736316" name="octolytics-dimension-user_id" /><meta content="mjsarfatti" name="octolytics-dimension-user_login" /><meta content="1665350" name="octolytics-dimension-repository_id" /><meta content="mjsarfatti/nestedSortable" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1665350" name="octolytics-dimension-repository_network_root_id" /><meta content="mjsarfatti/nestedSortable" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mjsarfatti/nestedSortable/commits/master.atom" rel="alternate" title="Recent Commits to nestedSortable:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public  page-blob">
    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have unread notifications">
        <span class="mail-status unread"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="029"
      data-repo="mjsarfatti/nestedSortable"
      data-branch="master"
      data-sha="5c14b3efcf71ef0c6e93f844d03d8ed8727c4874"
  >

    <input type="hidden" name="nwo" value="mjsarfatti/nestedSortable" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/029" class="name">
        <img height="20" src="https://1.gravatar.com/avatar/dd48fc56b45e9f431656e7494db53aa2?d=https%3A%2F%2Fidenticons.github.com%2F41de9a09d4a2d25940628d2f8d824218.png&amp;s=140" width="20" /> 029
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings (You have no verified emails)"
          title="Account settings (You have no verified emails)">
          <span class="octicon octicon-tools"></span>
        </a>
          <span class="settings-warning">!</span>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="mjsarfatti/nestedSortable">This repository</span>
    </li>
    <li>
      <a href="/mjsarfatti/nestedSortable/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      

<div class="flash-global flash-warn">
<div class="container">

    <h2>
      You don't have any verified emails.  We recommend <a href="https://github.com/settings/emails">verifying</a> at least one email.
    </h2>
    <p>
      Email verification helps our support team help you in case you have any email issues or lose your password.
    </p>













</div>
</div>



          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="+ysblDb4aqzX7RoHOwPgmfOVGjzr2HIpb/qsyXXSs18=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1665350" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/mjsarfatti/nestedSortable/watchers">
        90
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/mjsarfatti/nestedSortable/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/mjsarfatti/nestedSortable/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/mjsarfatti/nestedSortable/stargazers">678</a>
</div>

  </li>


        <li>
          <a href="/mjsarfatti/nestedSortable/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/mjsarfatti/nestedSortable/network" class="social-count">226</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/mjsarfatti" class="url fn" itemprop="url" rel="author"><span itemprop="title">mjsarfatti</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/mjsarfatti/nestedSortable" class="js-current-repository js-repo-home-link">nestedSortable</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/mjsarfatti/nestedSortable" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /mjsarfatti/nestedSortable">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/mjsarfatti/nestedSortable/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /mjsarfatti/nestedSortable/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>24</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/mjsarfatti/nestedSortable/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /mjsarfatti/nestedSortable/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>6</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/mjsarfatti/nestedSortable/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /mjsarfatti/nestedSortable/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/mjsarfatti/nestedSortable/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /mjsarfatti/nestedSortable/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/mjsarfatti/nestedSortable/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /mjsarfatti/nestedSortable/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/mjsarfatti/nestedSortable/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /mjsarfatti/nestedSortable/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/mjsarfatti/nestedSortable.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mjsarfatti/nestedSortable.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:mjsarfatti/nestedSortable.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:mjsarfatti/nestedSortable.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/mjsarfatti/nestedSortable" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mjsarfatti/nestedSortable" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

              <a href="/mjsarfatti/nestedSortable/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:44306dc94b5c79b6877f11bcb73db04a -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/mjsarfatti/nestedSortable/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mjsarfatti/nestedSortable/blob/2.0alpha/jquery.mjs.nestedSortable.js"
                 data-name="2.0alpha"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="2.0alpha">2.0alpha</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mjsarfatti/nestedSortable/blob/master/jquery.mjs.nestedSortable.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mjsarfatti/nestedSortable/tree/v1.3.4/jquery.mjs.nestedSortable.js"
                 data-name="v1.3.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.4">v1.3.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mjsarfatti/nestedSortable/tree/v1.3.3/jquery.mjs.nestedSortable.js"
                 data-name="v1.3.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.3">v1.3.3</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mjsarfatti/nestedSortable" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">nestedSortable</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.mjs.nestedSortable.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="jquery.mjs.nestedSortable.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://2.gravatar.com/avatar/037850dadd0d34e8f16177868727c1c9?d=https%3A%2F%2Fidenticons.github.com%2F960ca378841b025b53d02498e0054429.png&amp;s=140" width="24" />
    <span class="author"><a href="/vcarel" rel="author">vcarel</a></span>
    <time class="js-relative-date" datetime="2012-09-11T03:25:06-07:00" title="2012-09-11 03:25:06">September 11, 2012</time>
    <div class="commit-title">
        <a href="/mjsarfatti/nestedSortable/commit/28fc2a03db30f1c3ff5aabf92099cb5417c9c2c7" class="message" data-pjax="true" title="Fix call to isAllowed

Referring to the discussion about commit c1d6a86, isAllowed should be called with the currentItem instead of the item&#39;s placeholder, which is pretty useless.">Fix call to isAllowed</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="mjsarfatti" href="/mjsarfatti/nestedSortable/commits/master/jquery.mjs.nestedSortable.js?author=mjsarfatti"><img height="20" src="https://1.gravatar.com/avatar/cc7e2ba3cbd8627f8aa3a21994976a7a?d=https%3A%2F%2Fidenticons.github.com%2F19bb800eecea8c3ea9d6136a73195732.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="vcarel" href="/mjsarfatti/nestedSortable/commits/master/jquery.mjs.nestedSortable.js?author=vcarel"><img height="20" src="https://2.gravatar.com/avatar/037850dadd0d34e8f16177868727c1c9?d=https%3A%2F%2Fidenticons.github.com%2F960ca378841b025b53d02498e0054429.png&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://1.gravatar.com/avatar/cc7e2ba3cbd8627f8aa3a21994976a7a?d=https%3A%2F%2Fidenticons.github.com%2F19bb800eecea8c3ea9d6136a73195732.png&amp;s=140" width="24" />
          <a href="/mjsarfatti">mjsarfatti</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://2.gravatar.com/avatar/037850dadd0d34e8f16177868727c1c9?d=https%3A%2F%2Fidenticons.github.com%2F960ca378841b025b53d02498e0054429.png&amp;s=140" width="24" />
          <a href="/vcarel">vcarel</a>
        </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>430 lines (339 sloc)</span>
        <span>13.982 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards"
               href="http://windows.github.com" title="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped upwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/mjsarfatti/nestedSortable/edit/master/jquery.mjs.nestedSortable.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/mjsarfatti/nestedSortable/raw/master/jquery.mjs.nestedSortable.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/mjsarfatti/nestedSortable/blame/master/jquery.mjs.nestedSortable.js" class="button minibutton ">Blame</a>
          <a href="/mjsarfatti/nestedSortable/commits/master/jquery.mjs.nestedSortable.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/mjsarfatti/nestedSortable/delete/master/jquery.mjs.nestedSortable.js"
             title="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * jQuery UI Nested Sortable</span></div><div class='line' id='LC3'><span class="cm"> * v 1.3.5 / 21 jun 2012</span></div><div class='line' id='LC4'><span class="cm"> * http://mjsarfatti.com/code/nestedSortable</span></div><div class='line' id='LC5'><span class="cm"> *</span></div><div class='line' id='LC6'><span class="cm"> * Depends on:</span></div><div class='line' id='LC7'><span class="cm"> *	 jquery.ui.sortable.js 1.8+</span></div><div class='line' id='LC8'><span class="cm"> *</span></div><div class='line' id='LC9'><span class="cm"> * Copyright (c) 2010-2012 Manuele J Sarfatti</span></div><div class='line' id='LC10'><span class="cm"> * Licensed under the MIT License</span></div><div class='line' id='LC11'><span class="cm"> * http://www.opensource.org/licenses/mit-license.php</span></div><div class='line' id='LC12'><span class="cm"> */</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>	<span class="nx">$</span><span class="p">.</span><span class="nx">widget</span><span class="p">(</span><span class="s2">&quot;mjs.nestedSortable&quot;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ui</span><span class="p">.</span><span class="nx">sortable</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'>		<span class="nx">options</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC19'>			<span class="nx">tabSize</span><span class="o">:</span> <span class="mi">20</span><span class="p">,</span></div><div class='line' id='LC20'>			<span class="nx">disableNesting</span><span class="o">:</span> <span class="s1">&#39;mjs-nestedSortable-no-nesting&#39;</span><span class="p">,</span></div><div class='line' id='LC21'>			<span class="nx">errorClass</span><span class="o">:</span> <span class="s1">&#39;mjs-nestedSortable-error&#39;</span><span class="p">,</span></div><div class='line' id='LC22'>			<span class="nx">doNotClear</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC23'>			<span class="nx">listType</span><span class="o">:</span> <span class="s1">&#39;ol&#39;</span><span class="p">,</span></div><div class='line' id='LC24'>			<span class="nx">maxLevels</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC25'>			<span class="nx">protectRoot</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC26'>			<span class="nx">rootID</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC27'>			<span class="nx">rtl</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC28'>			<span class="nx">isAllowed</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">,</span> <span class="nx">parent</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC29'>		<span class="p">},</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'>		<span class="nx">_create</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC32'>			<span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;sortable&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;nestedSortable&#39;</span><span class="p">));</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">listType</span><span class="p">))</span></div><div class='line' id='LC35'>				<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;nestedSortable: Please check the listType option is set to your actual list type&#39;</span><span class="p">);</span></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'>			<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ui</span><span class="p">.</span><span class="nx">sortable</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_create</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC38'>		<span class="p">},</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'>		<span class="nx">destroy</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC41'>			<span class="k">this</span><span class="p">.</span><span class="nx">element</span></div><div class='line' id='LC42'>				<span class="p">.</span><span class="nx">removeData</span><span class="p">(</span><span class="s2">&quot;nestedSortable&quot;</span><span class="p">)</span></div><div class='line' id='LC43'>				<span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="s2">&quot;.nestedSortable&quot;</span><span class="p">);</span></div><div class='line' id='LC44'>			<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ui</span><span class="p">.</span><span class="nx">sortable</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">destroy</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC45'>		<span class="p">},</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>		<span class="nx">_mouseDrag</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>			<span class="c1">//Compute the helpers position</span></div><div class='line' id='LC50'>			<span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_generatePosition</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC51'>			<span class="k">this</span><span class="p">.</span><span class="nx">positionAbs</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_convertPositionTo</span><span class="p">(</span><span class="s2">&quot;absolute&quot;</span><span class="p">);</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">lastPositionAbs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC54'>				<span class="k">this</span><span class="p">.</span><span class="nx">lastPositionAbs</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">positionAbs</span><span class="p">;</span></div><div class='line' id='LC55'>			<span class="p">}</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>			<span class="kd">var</span> <span class="nx">o</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">;</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>			<span class="c1">//Do scrolling</span></div><div class='line' id='LC60'>			<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">scroll</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'>				<span class="kd">var</span> <span class="nx">scrolled</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC62'>				<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">scrollParent</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">!=</span> <span class="nb">document</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">scrollParent</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">tagName</span> <span class="o">!=</span> <span class="s1">&#39;HTML&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'>					<span class="k">if</span><span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">overflowOffset</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">scrollParent</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">offsetHeight</span><span class="p">)</span> <span class="o">-</span> <span class="nx">event</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">&lt;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">scrollSensitivity</span><span class="p">)</span></div><div class='line' id='LC65'>						<span class="k">this</span><span class="p">.</span><span class="nx">scrollParent</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">scrollTop</span> <span class="o">=</span> <span class="nx">scrolled</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">scrollParent</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">scrollTop</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">scrollSpeed</span><span class="p">;</span></div><div class='line' id='LC66'>					<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">overflowOffset</span><span class="p">.</span><span class="nx">top</span> <span class="o">&lt;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">scrollSensitivity</span><span class="p">)</span></div><div class='line' id='LC67'>						<span class="k">this</span><span class="p">.</span><span class="nx">scrollParent</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">scrollTop</span> <span class="o">=</span> <span class="nx">scrolled</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">scrollParent</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">scrollTop</span> <span class="o">-</span> <span class="nx">o</span><span class="p">.</span><span class="nx">scrollSpeed</span><span class="p">;</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'>					<span class="k">if</span><span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">overflowOffset</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">scrollParent</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">offsetWidth</span><span class="p">)</span> <span class="o">-</span> <span class="nx">event</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">&lt;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">scrollSensitivity</span><span class="p">)</span></div><div class='line' id='LC70'>						<span class="k">this</span><span class="p">.</span><span class="nx">scrollParent</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">scrollLeft</span> <span class="o">=</span> <span class="nx">scrolled</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">scrollParent</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">scrollLeft</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">scrollSpeed</span><span class="p">;</span></div><div class='line' id='LC71'>					<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">overflowOffset</span><span class="p">.</span><span class="nx">left</span> <span class="o">&lt;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">scrollSensitivity</span><span class="p">)</span></div><div class='line' id='LC72'>						<span class="k">this</span><span class="p">.</span><span class="nx">scrollParent</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">scrollLeft</span> <span class="o">=</span> <span class="nx">scrolled</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">scrollParent</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">scrollLeft</span> <span class="o">-</span> <span class="nx">o</span><span class="p">.</span><span class="nx">scrollSpeed</span><span class="p">;</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC75'><br/></div><div class='line' id='LC76'>					<span class="k">if</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">-</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">scrollTop</span><span class="p">()</span> <span class="o">&lt;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">scrollSensitivity</span><span class="p">)</span></div><div class='line' id='LC77'>						<span class="nx">scrolled</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">scrollTop</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">scrollTop</span><span class="p">()</span> <span class="o">-</span> <span class="nx">o</span><span class="p">.</span><span class="nx">scrollSpeed</span><span class="p">);</span></div><div class='line' id='LC78'>					<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">height</span><span class="p">()</span> <span class="o">-</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">-</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">scrollTop</span><span class="p">())</span> <span class="o">&lt;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">scrollSensitivity</span><span class="p">)</span></div><div class='line' id='LC79'>						<span class="nx">scrolled</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">scrollTop</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">scrollTop</span><span class="p">()</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">scrollSpeed</span><span class="p">);</span></div><div class='line' id='LC80'><br/></div><div class='line' id='LC81'>					<span class="k">if</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">-</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">scrollLeft</span><span class="p">()</span> <span class="o">&lt;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">scrollSensitivity</span><span class="p">)</span></div><div class='line' id='LC82'>						<span class="nx">scrolled</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">scrollLeft</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">scrollLeft</span><span class="p">()</span> <span class="o">-</span> <span class="nx">o</span><span class="p">.</span><span class="nx">scrollSpeed</span><span class="p">);</span></div><div class='line' id='LC83'>					<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">width</span><span class="p">()</span> <span class="o">-</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">-</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">scrollLeft</span><span class="p">())</span> <span class="o">&lt;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">scrollSensitivity</span><span class="p">)</span></div><div class='line' id='LC84'>						<span class="nx">scrolled</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">scrollLeft</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">scrollLeft</span><span class="p">()</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">scrollSpeed</span><span class="p">);</span></div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'>				<span class="p">}</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>				<span class="k">if</span><span class="p">(</span><span class="nx">scrolled</span> <span class="o">!==</span> <span class="kc">false</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ui</span><span class="p">.</span><span class="nx">ddmanager</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">dropBehaviour</span><span class="p">)</span></div><div class='line' id='LC89'>					<span class="nx">$</span><span class="p">.</span><span class="nx">ui</span><span class="p">.</span><span class="nx">ddmanager</span><span class="p">.</span><span class="nx">prepareOffsets</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC90'>			<span class="p">}</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'>			<span class="c1">//Regenerate the absolute position used for position checks</span></div><div class='line' id='LC93'>			<span class="k">this</span><span class="p">.</span><span class="nx">positionAbs</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_convertPositionTo</span><span class="p">(</span><span class="s2">&quot;absolute&quot;</span><span class="p">);</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Find the top offset before rearrangement,</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">previousTopOffset</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">.</span><span class="nx">offset</span><span class="p">().</span><span class="nx">top</span><span class="p">;</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'>			<span class="c1">//Set the helper position</span></div><div class='line' id='LC99'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">axis</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">axis</span> <span class="o">!=</span> <span class="s2">&quot;y&quot;</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">helper</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">style</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">left</span><span class="o">+</span><span class="s1">&#39;px&#39;</span><span class="p">;</span></div><div class='line' id='LC100'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">axis</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">axis</span> <span class="o">!=</span> <span class="s2">&quot;x&quot;</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">helper</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">style</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">top</span><span class="o">+</span><span class="s1">&#39;px&#39;</span><span class="p">;</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>			<span class="c1">//Rearrange</span></div><div class='line' id='LC103'>			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">items</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>				<span class="c1">//Cache variables and intersection, continue if no intersection</span></div><div class='line' id='LC106'>				<span class="kd">var</span> <span class="nx">item</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">items</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">itemElement</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">item</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">intersection</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_intersectsWithPointer</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC107'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">intersection</span><span class="p">)</span> <span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>				<span class="k">if</span><span class="p">(</span><span class="nx">itemElement</span> <span class="o">!=</span> <span class="k">this</span><span class="p">.</span><span class="nx">currentItem</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="c1">//cannot intersect with itself</span></div><div class='line' id='LC110'>					<span class="o">&amp;&amp;</span>	<span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">[</span><span class="nx">intersection</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">?</span> <span class="s2">&quot;next&quot;</span> <span class="o">:</span> <span class="s2">&quot;prev&quot;</span><span class="p">]()[</span><span class="mi">0</span><span class="p">]</span> <span class="o">!=</span> <span class="nx">itemElement</span> <span class="c1">//no useless actions that have been done before</span></div><div class='line' id='LC111'>					<span class="o">&amp;&amp;</span>	<span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">itemElement</span><span class="p">)</span> <span class="c1">//no action if the item moved is the parent of the item checked</span></div><div class='line' id='LC112'>					<span class="o">&amp;&amp;</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">type</span> <span class="o">==</span> <span class="s1">&#39;semi-dynamic&#39;</span> <span class="o">?</span> <span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">itemElement</span><span class="p">)</span> <span class="o">:</span> <span class="kc">true</span><span class="p">)</span></div><div class='line' id='LC113'>					<span class="c1">//&amp;&amp; itemElement.parentNode == this.placeholder[0].parentNode // only rearrange items within the same container</span></div><div class='line' id='LC114'>				<span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>					<span class="nx">$</span><span class="p">(</span><span class="nx">itemElement</span><span class="p">).</span><span class="nx">mouseenter</span><span class="p">();</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'>					<span class="k">this</span><span class="p">.</span><span class="nx">direction</span> <span class="o">=</span> <span class="nx">intersection</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">?</span> <span class="s2">&quot;down&quot;</span> <span class="o">:</span> <span class="s2">&quot;up&quot;</span><span class="p">;</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'>					<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">tolerance</span> <span class="o">==</span> <span class="s2">&quot;pointer&quot;</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">_intersectsWithSides</span><span class="p">(</span><span class="nx">item</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC121'>						<span class="nx">$</span><span class="p">(</span><span class="nx">itemElement</span><span class="p">).</span><span class="nx">mouseleave</span><span class="p">();</span></div><div class='line' id='LC122'>						<span class="k">this</span><span class="p">.</span><span class="nx">_rearrange</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC123'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC124'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC125'>					<span class="p">}</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>					<span class="c1">// Clear emtpy ul&#39;s/ol&#39;s</span></div><div class='line' id='LC128'>					<span class="k">this</span><span class="p">.</span><span class="nx">_clearEmpty</span><span class="p">(</span><span class="nx">itemElement</span><span class="p">);</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>					<span class="k">this</span><span class="p">.</span><span class="nx">_trigger</span><span class="p">(</span><span class="s2">&quot;change&quot;</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_uiHash</span><span class="p">());</span></div><div class='line' id='LC131'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC132'>				<span class="p">}</span></div><div class='line' id='LC133'>			<span class="p">}</span></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'>			<span class="kd">var</span> <span class="nx">parentItem</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">parentNode</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC136'>							 <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">).</span><span class="nx">closest</span><span class="p">(</span><span class="s1">&#39;.ui-sortable&#39;</span><span class="p">).</span><span class="nx">length</span><span class="p">)</span></div><div class='line' id='LC137'>				       			<span class="o">?</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span></div><div class='line' id='LC138'>				       			<span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC139'>			    <span class="nx">level</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getLevel</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">),</span></div><div class='line' id='LC140'>			    <span class="nx">childLevels</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getChildLevels</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">helper</span><span class="p">);</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// To find the previous sibling in the list, keep backtracking until we hit a valid list item.</span></div><div class='line' id='LC143'>			<span class="kd">var</span> <span class="nx">previousItem</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">previousSibling</span> <span class="o">?</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">previousSibling</span><span class="p">)</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC144'>			<span class="k">if</span> <span class="p">(</span><span class="nx">previousItem</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC145'>				<span class="k">while</span> <span class="p">(</span><span class="nx">previousItem</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">!=</span> <span class="s1">&#39;li&#39;</span> <span class="o">||</span> <span class="nx">previousItem</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="k">this</span><span class="p">.</span><span class="nx">currentItem</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">||</span> <span class="nx">previousItem</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="k">this</span><span class="p">.</span><span class="nx">helper</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC146'>					<span class="k">if</span> <span class="p">(</span><span class="nx">previousItem</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">previousSibling</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC147'>						<span class="nx">previousItem</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">previousItem</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">previousSibling</span><span class="p">);</span></div><div class='line' id='LC148'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC149'>						<span class="nx">previousItem</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC150'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC151'>					<span class="p">}</span></div><div class='line' id='LC152'>				<span class="p">}</span></div><div class='line' id='LC153'>			<span class="p">}</span></div><div class='line' id='LC154'><br/></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// To find the next sibling in the list, keep stepping forward until we hit a valid list item.</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">nextItem</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">nextSibling</span> <span class="o">?</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">nextSibling</span><span class="p">)</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nextItem</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">nextItem</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">!=</span> <span class="s1">&#39;li&#39;</span> <span class="o">||</span> <span class="nx">nextItem</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="k">this</span><span class="p">.</span><span class="nx">currentItem</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">||</span> <span class="nx">nextItem</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="k">this</span><span class="p">.</span><span class="nx">helper</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nextItem</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">nextSibling</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nextItem</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">nextItem</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">nextSibling</span><span class="p">);</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nextItem</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>			<span class="kd">var</span> <span class="nx">newList</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">listType</span><span class="p">);</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>			<span class="k">this</span><span class="p">.</span><span class="nx">beyondMaxLevels</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC171'><br/></div><div class='line' id='LC172'>			<span class="c1">// If the item is moved to the left, send it to its parent&#39;s level unless there are siblings below it.</span></div><div class='line' id='LC173'>			<span class="k">if</span> <span class="p">(</span><span class="nx">parentItem</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">nextItem</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC174'>					<span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">rtl</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">positionAbs</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">helper</span><span class="p">.</span><span class="nx">outerWidth</span><span class="p">()</span> <span class="o">&gt;</span> <span class="nx">parentItem</span><span class="p">.</span><span class="nx">offset</span><span class="p">().</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">parentItem</span><span class="p">.</span><span class="nx">outerWidth</span><span class="p">())</span> <span class="o">||</span></div><div class='line' id='LC175'>					<span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">rtl</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">positionAbs</span><span class="p">.</span><span class="nx">left</span> <span class="o">&lt;</span> <span class="nx">parentItem</span><span class="p">.</span><span class="nx">offset</span><span class="p">().</span><span class="nx">left</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC176'>				<span class="nx">parentItem</span><span class="p">.</span><span class="nx">after</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC177'>				<span class="k">this</span><span class="p">.</span><span class="nx">_clearEmpty</span><span class="p">(</span><span class="nx">parentItem</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC178'>				<span class="k">this</span><span class="p">.</span><span class="nx">_trigger</span><span class="p">(</span><span class="s2">&quot;change&quot;</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_uiHash</span><span class="p">());</span></div><div class='line' id='LC179'>			<span class="p">}</span></div><div class='line' id='LC180'>			<span class="c1">// If the item is below a sibling and is moved to the right, make it a child of that sibling.</span></div><div class='line' id='LC181'>			<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">previousItem</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC182'>						<span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">rtl</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">positionAbs</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">helper</span><span class="p">.</span><span class="nx">outerWidth</span><span class="p">()</span> <span class="o">&lt;</span> <span class="nx">previousItem</span><span class="p">.</span><span class="nx">offset</span><span class="p">().</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">previousItem</span><span class="p">.</span><span class="nx">outerWidth</span><span class="p">()</span> <span class="o">-</span> <span class="nx">o</span><span class="p">.</span><span class="nx">tabSize</span><span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC183'>						<span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">rtl</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">positionAbs</span><span class="p">.</span><span class="nx">left</span> <span class="o">&gt;</span> <span class="nx">previousItem</span><span class="p">.</span><span class="nx">offset</span><span class="p">().</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">tabSize</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC184'>				<span class="k">this</span><span class="p">.</span><span class="nx">_isAllowed</span><span class="p">(</span><span class="nx">previousItem</span><span class="p">,</span> <span class="nx">level</span><span class="p">,</span> <span class="nx">level</span><span class="o">+</span><span class="nx">childLevels</span><span class="o">+</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC185'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">previousItem</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">listType</span><span class="p">).</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC186'>					<span class="nx">previousItem</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">newList</span><span class="p">);</span></div><div class='line' id='LC187'>				<span class="p">}</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If this item is being moved from the top, add it to the top of the list.</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">previousTopOffset</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">previousTopOffset</span> <span class="o">&lt;=</span> <span class="nx">previousItem</span><span class="p">.</span><span class="nx">offset</span><span class="p">().</span><span class="nx">top</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">previousItem</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">listType</span><span class="p">).</span><span class="nx">prepend</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">);</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Otherwise, add it to the bottom of the list.</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC194'>				  <span class="nx">previousItem</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">listType</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">appendChild</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC196'>				<span class="k">this</span><span class="p">.</span><span class="nx">_trigger</span><span class="p">(</span><span class="s2">&quot;change&quot;</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_uiHash</span><span class="p">());</span></div><div class='line' id='LC197'>			<span class="p">}</span></div><div class='line' id='LC198'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC199'>				<span class="k">this</span><span class="p">.</span><span class="nx">_isAllowed</span><span class="p">(</span><span class="nx">parentItem</span><span class="p">,</span> <span class="nx">level</span><span class="p">,</span> <span class="nx">level</span><span class="o">+</span><span class="nx">childLevels</span><span class="p">);</span></div><div class='line' id='LC200'>			<span class="p">}</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'>			<span class="c1">//Post events to containers</span></div><div class='line' id='LC203'>			<span class="k">this</span><span class="p">.</span><span class="nx">_contactContainers</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC204'><br/></div><div class='line' id='LC205'>			<span class="c1">//Interconnect with droppables</span></div><div class='line' id='LC206'>			<span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">ui</span><span class="p">.</span><span class="nx">ddmanager</span><span class="p">)</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ui</span><span class="p">.</span><span class="nx">ddmanager</span><span class="p">.</span><span class="nx">drag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC207'><br/></div><div class='line' id='LC208'>			<span class="c1">//Call callbacks</span></div><div class='line' id='LC209'>			<span class="k">this</span><span class="p">.</span><span class="nx">_trigger</span><span class="p">(</span><span class="s1">&#39;sort&#39;</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_uiHash</span><span class="p">());</span></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'>			<span class="k">this</span><span class="p">.</span><span class="nx">lastPositionAbs</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">positionAbs</span><span class="p">;</span></div><div class='line' id='LC212'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC213'><br/></div><div class='line' id='LC214'>		<span class="p">},</span></div><div class='line' id='LC215'><br/></div><div class='line' id='LC216'>		<span class="nx">_mouseStop</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">noPropagation</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC217'><br/></div><div class='line' id='LC218'>			<span class="c1">// If the item is in a position not allowed, send it back</span></div><div class='line' id='LC219'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">beyondMaxLevels</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC220'><br/></div><div class='line' id='LC221'>				<span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">errorClass</span><span class="p">);</span></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'>				<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">domPosition</span><span class="p">.</span><span class="nx">prev</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC224'>					<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">domPosition</span><span class="p">.</span><span class="nx">prev</span><span class="p">).</span><span class="nx">after</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">);</span></div><div class='line' id='LC225'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC226'>					<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">domPosition</span><span class="p">.</span><span class="nx">parent</span><span class="p">).</span><span class="nx">prepend</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">);</span></div><div class='line' id='LC227'>				<span class="p">}</span></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'>				<span class="k">this</span><span class="p">.</span><span class="nx">_trigger</span><span class="p">(</span><span class="s2">&quot;revert&quot;</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_uiHash</span><span class="p">());</span></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'>			<span class="p">}</span></div><div class='line' id='LC232'><br/></div><div class='line' id='LC233'>			<span class="c1">// Clean last empty ul/ol</span></div><div class='line' id='LC234'>			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">items</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC235'>				<span class="kd">var</span> <span class="nx">item</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">items</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">item</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC236'>				<span class="k">this</span><span class="p">.</span><span class="nx">_clearEmpty</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC237'>			<span class="p">}</span></div><div class='line' id='LC238'><br/></div><div class='line' id='LC239'>			<span class="nx">$</span><span class="p">.</span><span class="nx">ui</span><span class="p">.</span><span class="nx">sortable</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_mouseStop</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC240'><br/></div><div class='line' id='LC241'>		<span class="p">},</span></div><div class='line' id='LC242'><br/></div><div class='line' id='LC243'>		<span class="nx">serialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC244'><br/></div><div class='line' id='LC245'>			<span class="kd">var</span> <span class="nx">o</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span> <span class="nx">options</span><span class="p">),</span></div><div class='line' id='LC246'>				<span class="nx">items</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getItemsAsjQuery</span><span class="p">(</span><span class="nx">o</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">connected</span><span class="p">),</span></div><div class='line' id='LC247'>			    <span class="nx">str</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC248'><br/></div><div class='line' id='LC249'>			<span class="nx">$</span><span class="p">(</span><span class="nx">items</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC250'>				<span class="kd">var</span> <span class="nx">res</span> <span class="o">=</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">item</span> <span class="o">||</span> <span class="k">this</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">attribute</span> <span class="o">||</span> <span class="s1">&#39;id&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC251'>						<span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">expression</span> <span class="o">||</span> <span class="p">(</span><span class="sr">/(.+)[-=_](.+)/</span><span class="p">)),</span></div><div class='line' id='LC252'>				    <span class="nx">pid</span> <span class="o">=</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">item</span> <span class="o">||</span> <span class="k">this</span><span class="p">).</span><span class="nx">parent</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">listType</span><span class="p">)</span></div><div class='line' id='LC253'>						<span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">items</span><span class="p">)</span></div><div class='line' id='LC254'>						<span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">attribute</span> <span class="o">||</span> <span class="s1">&#39;id&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC255'>						<span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">expression</span> <span class="o">||</span> <span class="p">(</span><span class="sr">/(.+)[-=_](.+)/</span><span class="p">));</span></div><div class='line' id='LC256'><br/></div><div class='line' id='LC257'>				<span class="k">if</span> <span class="p">(</span><span class="nx">res</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC258'>					<span class="nx">str</span><span class="p">.</span><span class="nx">push</span><span class="p">(((</span><span class="nx">o</span><span class="p">.</span><span class="nx">key</span> <span class="o">||</span> <span class="nx">res</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span> <span class="o">+</span> <span class="s1">&#39;[&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">key</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">expression</span> <span class="o">?</span> <span class="nx">res</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">:</span> <span class="nx">res</span><span class="p">[</span><span class="mi">2</span><span class="p">])</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span><span class="p">)</span></div><div class='line' id='LC259'>						<span class="o">+</span> <span class="s1">&#39;=&#39;</span></div><div class='line' id='LC260'>						<span class="o">+</span> <span class="p">(</span><span class="nx">pid</span> <span class="o">?</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">key</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">expression</span> <span class="o">?</span> <span class="nx">pid</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">:</span> <span class="nx">pid</span><span class="p">[</span><span class="mi">2</span><span class="p">])</span> <span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">rootID</span><span class="p">));</span></div><div class='line' id='LC261'>				<span class="p">}</span></div><div class='line' id='LC262'>			<span class="p">});</span></div><div class='line' id='LC263'><br/></div><div class='line' id='LC264'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">str</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC265'>				<span class="nx">str</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">key</span> <span class="o">+</span> <span class="s1">&#39;=&#39;</span><span class="p">);</span></div><div class='line' id='LC266'>			<span class="p">}</span></div><div class='line' id='LC267'><br/></div><div class='line' id='LC268'>			<span class="k">return</span> <span class="nx">str</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&amp;&#39;</span><span class="p">);</span></div><div class='line' id='LC269'><br/></div><div class='line' id='LC270'>		<span class="p">},</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'>		<span class="nx">toHierarchy</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC273'><br/></div><div class='line' id='LC274'>			<span class="kd">var</span> <span class="nx">o</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span> <span class="nx">options</span><span class="p">),</span></div><div class='line' id='LC275'>				<span class="nx">sDepth</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">startDepthCount</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC276'>			    <span class="nx">ret</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC277'><br/></div><div class='line' id='LC278'>			<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">items</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC279'>				<span class="kd">var</span> <span class="nx">level</span> <span class="o">=</span> <span class="nx">_recursiveItems</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC280'>				<span class="nx">ret</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">level</span><span class="p">);</span></div><div class='line' id='LC281'>			<span class="p">});</span></div><div class='line' id='LC282'><br/></div><div class='line' id='LC283'>			<span class="k">return</span> <span class="nx">ret</span><span class="p">;</span></div><div class='line' id='LC284'><br/></div><div class='line' id='LC285'>			<span class="kd">function</span> <span class="nx">_recursiveItems</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC286'>				<span class="kd">var</span> <span class="nx">id</span> <span class="o">=</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">item</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">attribute</span> <span class="o">||</span> <span class="s1">&#39;id&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">match</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">expression</span> <span class="o">||</span> <span class="p">(</span><span class="sr">/(.+)[-=_](.+)/</span><span class="p">));</span></div><div class='line' id='LC287'>				<span class="k">if</span> <span class="p">(</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC288'>					<span class="kd">var</span> <span class="nx">currentItem</span> <span class="o">=</span> <span class="p">{</span><span class="s2">&quot;id&quot;</span> <span class="o">:</span> <span class="nx">id</span><span class="p">[</span><span class="mi">2</span><span class="p">]};</span></div><div class='line' id='LC289'>					<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">item</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">listType</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">items</span><span class="p">).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC290'>						<span class="nx">currentItem</span><span class="p">.</span><span class="nx">children</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC291'>						<span class="nx">$</span><span class="p">(</span><span class="nx">item</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">listType</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">items</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC292'>							<span class="kd">var</span> <span class="nx">level</span> <span class="o">=</span> <span class="nx">_recursiveItems</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC293'>							<span class="nx">currentItem</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">level</span><span class="p">);</span></div><div class='line' id='LC294'>						<span class="p">});</span></div><div class='line' id='LC295'>					<span class="p">}</span></div><div class='line' id='LC296'>					<span class="k">return</span> <span class="nx">currentItem</span><span class="p">;</span></div><div class='line' id='LC297'>				<span class="p">}</span></div><div class='line' id='LC298'>			<span class="p">}</span></div><div class='line' id='LC299'>		<span class="p">},</span></div><div class='line' id='LC300'><br/></div><div class='line' id='LC301'>		<span class="nx">toArray</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC302'><br/></div><div class='line' id='LC303'>			<span class="kd">var</span> <span class="nx">o</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span> <span class="nx">options</span><span class="p">),</span></div><div class='line' id='LC304'>				<span class="nx">sDepth</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">startDepthCount</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC305'>			    <span class="nx">ret</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC306'>			    <span class="nx">left</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC307'><br/></div><div class='line' id='LC308'>			<span class="nx">ret</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC309'>				<span class="s2">&quot;item_id&quot;</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">rootID</span><span class="p">,</span></div><div class='line' id='LC310'>				<span class="s2">&quot;parent_id&quot;</span><span class="o">:</span> <span class="s1">&#39;none&#39;</span><span class="p">,</span></div><div class='line' id='LC311'>				<span class="s2">&quot;depth&quot;</span><span class="o">:</span> <span class="nx">sDepth</span><span class="p">,</span></div><div class='line' id='LC312'>				<span class="s2">&quot;left&quot;</span><span class="o">:</span> <span class="s1">&#39;1&#39;</span><span class="p">,</span></div><div class='line' id='LC313'>				<span class="s2">&quot;right&quot;</span><span class="o">:</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">items</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">).</span><span class="nx">length</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">*</span> <span class="mi">2</span></div><div class='line' id='LC314'>			<span class="p">});</span></div><div class='line' id='LC315'><br/></div><div class='line' id='LC316'>			<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">items</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC317'>				<span class="nx">left</span> <span class="o">=</span> <span class="nx">_recursiveArray</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">sDepth</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">left</span><span class="p">);</span></div><div class='line' id='LC318'>			<span class="p">});</span></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'>			<span class="nx">ret</span> <span class="o">=</span> <span class="nx">ret</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span> <span class="k">return</span> <span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">left</span> <span class="o">-</span> <span class="nx">b</span><span class="p">.</span><span class="nx">left</span><span class="p">);</span> <span class="p">});</span></div><div class='line' id='LC321'><br/></div><div class='line' id='LC322'>			<span class="k">return</span> <span class="nx">ret</span><span class="p">;</span></div><div class='line' id='LC323'><br/></div><div class='line' id='LC324'>			<span class="kd">function</span> <span class="nx">_recursiveArray</span><span class="p">(</span><span class="nx">item</span><span class="p">,</span> <span class="nx">depth</span><span class="p">,</span> <span class="nx">left</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC325'><br/></div><div class='line' id='LC326'>				<span class="kd">var</span> <span class="nx">right</span> <span class="o">=</span> <span class="nx">left</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC327'>				    <span class="nx">id</span><span class="p">,</span></div><div class='line' id='LC328'>				    <span class="nx">pid</span><span class="p">;</span></div><div class='line' id='LC329'><br/></div><div class='line' id='LC330'>				<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">item</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">listType</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">items</span><span class="p">).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC331'>					<span class="nx">depth</span> <span class="o">++</span><span class="p">;</span></div><div class='line' id='LC332'>					<span class="nx">$</span><span class="p">(</span><span class="nx">item</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">listType</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">items</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC333'>						<span class="nx">right</span> <span class="o">=</span> <span class="nx">_recursiveArray</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="nx">depth</span><span class="p">,</span> <span class="nx">right</span><span class="p">);</span></div><div class='line' id='LC334'>					<span class="p">});</span></div><div class='line' id='LC335'>					<span class="nx">depth</span> <span class="o">--</span><span class="p">;</span></div><div class='line' id='LC336'>				<span class="p">}</span></div><div class='line' id='LC337'><br/></div><div class='line' id='LC338'>				<span class="nx">id</span> <span class="o">=</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">item</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">attribute</span> <span class="o">||</span> <span class="s1">&#39;id&#39;</span><span class="p">)).</span><span class="nx">match</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">expression</span> <span class="o">||</span> <span class="p">(</span><span class="sr">/(.+)[-=_](.+)/</span><span class="p">));</span></div><div class='line' id='LC339'><br/></div><div class='line' id='LC340'>				<span class="k">if</span> <span class="p">(</span><span class="nx">depth</span> <span class="o">===</span> <span class="nx">sDepth</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC341'>					<span class="nx">pid</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">rootID</span><span class="p">;</span></div><div class='line' id='LC342'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC343'>					<span class="kd">var</span> <span class="nx">parentItem</span> <span class="o">=</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">item</span><span class="p">).</span><span class="nx">parent</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">listType</span><span class="p">)</span></div><div class='line' id='LC344'>											 <span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">items</span><span class="p">)</span></div><div class='line' id='LC345'>											 <span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">attribute</span> <span class="o">||</span> <span class="s1">&#39;id&#39;</span><span class="p">))</span></div><div class='line' id='LC346'>											 <span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">expression</span> <span class="o">||</span> <span class="p">(</span><span class="sr">/(.+)[-=_](.+)/</span><span class="p">));</span></div><div class='line' id='LC347'>					<span class="nx">pid</span> <span class="o">=</span> <span class="nx">parentItem</span><span class="p">[</span><span class="mi">2</span><span class="p">];</span></div><div class='line' id='LC348'>				<span class="p">}</span></div><div class='line' id='LC349'><br/></div><div class='line' id='LC350'>				<span class="k">if</span> <span class="p">(</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC351'>						<span class="nx">ret</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span><span class="s2">&quot;item_id&quot;</span><span class="o">:</span> <span class="nx">id</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span> <span class="s2">&quot;parent_id&quot;</span><span class="o">:</span> <span class="nx">pid</span><span class="p">,</span> <span class="s2">&quot;depth&quot;</span><span class="o">:</span> <span class="nx">depth</span><span class="p">,</span> <span class="s2">&quot;left&quot;</span><span class="o">:</span> <span class="nx">left</span><span class="p">,</span> <span class="s2">&quot;right&quot;</span><span class="o">:</span> <span class="nx">right</span><span class="p">});</span></div><div class='line' id='LC352'>				<span class="p">}</span></div><div class='line' id='LC353'><br/></div><div class='line' id='LC354'>				<span class="nx">left</span> <span class="o">=</span> <span class="nx">right</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC355'>				<span class="k">return</span> <span class="nx">left</span><span class="p">;</span></div><div class='line' id='LC356'>			<span class="p">}</span></div><div class='line' id='LC357'><br/></div><div class='line' id='LC358'>		<span class="p">},</span></div><div class='line' id='LC359'><br/></div><div class='line' id='LC360'>		<span class="nx">_clearEmpty</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC361'><br/></div><div class='line' id='LC362'>			<span class="kd">var</span> <span class="nx">emptyList</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">item</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">listType</span><span class="p">);</span></div><div class='line' id='LC363'>			<span class="k">if</span> <span class="p">(</span><span class="nx">emptyList</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">emptyList</span><span class="p">.</span><span class="nx">children</span><span class="p">().</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">doNotClear</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC364'>				<span class="nx">emptyList</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC365'>			<span class="p">}</span></div><div class='line' id='LC366'><br/></div><div class='line' id='LC367'>		<span class="p">},</span></div><div class='line' id='LC368'><br/></div><div class='line' id='LC369'>		<span class="nx">_getLevel</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC370'><br/></div><div class='line' id='LC371'>			<span class="kd">var</span> <span class="nx">level</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC372'><br/></div><div class='line' id='LC373'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">listType</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC374'>				<span class="kd">var</span> <span class="nx">list</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">closest</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">listType</span><span class="p">);</span></div><div class='line' id='LC375'>				<span class="k">while</span> <span class="p">(</span><span class="nx">list</span> <span class="o">&amp;&amp;</span> <span class="nx">list</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> </div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	<span class="o">!</span><span class="nx">list</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;.ui-sortable&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC377'>					<span class="nx">level</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC378'>					<span class="nx">list</span> <span class="o">=</span> <span class="nx">list</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">closest</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">listType</span><span class="p">);</span></div><div class='line' id='LC379'>				<span class="p">}</span></div><div class='line' id='LC380'>			<span class="p">}</span></div><div class='line' id='LC381'><br/></div><div class='line' id='LC382'>			<span class="k">return</span> <span class="nx">level</span><span class="p">;</span></div><div class='line' id='LC383'>		<span class="p">},</span></div><div class='line' id='LC384'><br/></div><div class='line' id='LC385'>		<span class="nx">_getChildLevels</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">parent</span><span class="p">,</span> <span class="nx">depth</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC386'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC387'>			    <span class="nx">o</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC388'>			    <span class="nx">result</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC389'>			<span class="nx">depth</span> <span class="o">=</span> <span class="nx">depth</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC390'><br/></div><div class='line' id='LC391'>			<span class="nx">$</span><span class="p">(</span><span class="nx">parent</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">listType</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">items</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">child</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC392'>					<span class="nx">result</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">_getChildLevels</span><span class="p">(</span><span class="nx">child</span><span class="p">,</span> <span class="nx">depth</span> <span class="o">+</span> <span class="mi">1</span><span class="p">),</span> <span class="nx">result</span><span class="p">);</span></div><div class='line' id='LC393'>			<span class="p">});</span></div><div class='line' id='LC394'><br/></div><div class='line' id='LC395'>			<span class="k">return</span> <span class="nx">depth</span> <span class="o">?</span> <span class="nx">result</span> <span class="o">+</span> <span class="mi">1</span> <span class="o">:</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC396'>		<span class="p">},</span></div><div class='line' id='LC397'><br/></div><div class='line' id='LC398'>		<span class="nx">_isAllowed</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">parentItem</span><span class="p">,</span> <span class="nx">level</span><span class="p">,</span> <span class="nx">levels</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC399'>			<span class="kd">var</span> <span class="nx">o</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC400'>				<span class="nx">isRoot</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">domPosition</span><span class="p">.</span><span class="nx">parent</span><span class="p">).</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;ui-sortable&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC401'>				<span class="nx">maxLevels</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">.</span><span class="nx">closest</span><span class="p">(</span><span class="s1">&#39;.ui-sortable&#39;</span><span class="p">).</span><span class="nx">nestedSortable</span><span class="p">(</span><span class="s1">&#39;option&#39;</span><span class="p">,</span> <span class="s1">&#39;maxLevels&#39;</span><span class="p">);</span> <span class="c1">// this takes into account the maxLevels set to the recipient list</span></div><div class='line' id='LC402'><br/></div><div class='line' id='LC403'>			<span class="c1">// Is the root protected?</span></div><div class='line' id='LC404'>			<span class="c1">// Are we trying to nest under a no-nest?</span></div><div class='line' id='LC405'>			<span class="c1">// Are we nesting too deep?</span></div><div class='line' id='LC406'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">isAllowed</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">currentItem</span><span class="p">,</span> <span class="nx">parentItem</span><span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC407'>				<span class="nx">parentItem</span> <span class="o">&amp;&amp;</span> <span class="nx">parentItem</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">disableNesting</span><span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC408'>				<span class="nx">o</span><span class="p">.</span><span class="nx">protectRoot</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">parentItem</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">isRoot</span> <span class="o">||</span> <span class="nx">isRoot</span> <span class="o">&amp;&amp;</span> <span class="nx">level</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC409'>					<span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">errorClass</span><span class="p">);</span></div><div class='line' id='LC410'>					<span class="k">if</span> <span class="p">(</span><span class="nx">maxLevels</span> <span class="o">&lt;</span> <span class="nx">levels</span> <span class="o">&amp;&amp;</span> <span class="nx">maxLevels</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC411'>						<span class="k">this</span><span class="p">.</span><span class="nx">beyondMaxLevels</span> <span class="o">=</span> <span class="nx">levels</span> <span class="o">-</span> <span class="nx">maxLevels</span><span class="p">;</span></div><div class='line' id='LC412'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC413'>						<span class="k">this</span><span class="p">.</span><span class="nx">beyondMaxLevels</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC414'>					<span class="p">}</span></div><div class='line' id='LC415'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC416'>				<span class="k">if</span> <span class="p">(</span><span class="nx">maxLevels</span> <span class="o">&lt;</span> <span class="nx">levels</span> <span class="o">&amp;&amp;</span> <span class="nx">maxLevels</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC417'>					<span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">errorClass</span><span class="p">);</span></div><div class='line' id='LC418'>					<span class="k">this</span><span class="p">.</span><span class="nx">beyondMaxLevels</span> <span class="o">=</span> <span class="nx">levels</span> <span class="o">-</span> <span class="nx">maxLevels</span><span class="p">;</span></div><div class='line' id='LC419'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC420'>					<span class="k">this</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">errorClass</span><span class="p">);</span></div><div class='line' id='LC421'>					<span class="k">this</span><span class="p">.</span><span class="nx">beyondMaxLevels</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC422'>				<span class="p">}</span></div><div class='line' id='LC423'>			<span class="p">}</span></div><div class='line' id='LC424'>		<span class="p">}</span></div><div class='line' id='LC425'><br/></div><div class='line' id='LC426'>	<span class="p">}));</span></div><div class='line' id='LC427'><br/></div><div class='line' id='LC428'>	<span class="nx">$</span><span class="p">.</span><span class="nx">mjs</span><span class="p">.</span><span class="nx">nestedSortable</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ui</span><span class="p">.</span><span class="nx">sortable</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">mjs</span><span class="p">.</span><span class="nx">nestedSortable</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC429'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.04681s from github-fe122-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/mjsarfatti/nestedSortable/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

