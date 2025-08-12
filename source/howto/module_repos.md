# Using Module Repositories


This video will show you how to create a code space after forking a repo
using the green button, but you can also use the orange button to both fork 
and create the code space. Try both ways!

<iframe width="560" height="315" src="https://www.youtube.com/embed/svTv-EmyU5c?si=7ZW8UjqhLbThYNSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


In the LEAGUE's online Java curriculum, the lessons are organized
into _levels_, _modules_, _lessons_ and _assignments_.  Every level has a
whole website. For instance, here is the [website for Level 0](https://league-java.github.io/Level0/). 
Inside the level are modules,
modules are named with a number at the end, like "Module 0", and they will
have links with a large bold title on the left side of the page. Click on
that link to get the introduction to the module. For instance, here the link
to [Level0, Module 0](http://localhost:8080/Level0/lessons/Module0/)


## Codespace, Fork and View Links

On the root model pages in the Curriculum, ( for instance, [Level0, Module 0](http://localhost:8080/Level0/lessons/Module0/) ) page you will see three important buttons: 

The <img class="inline" src="https://images.jointheleague.org/module-navigation/open_codespc.png" >
button. This button will fork the repository into your own github workspace so you can 
work on it, and will also create a new virtual computer with an editor for you to work on it. 

The <img class="inline" style="vertical-align:middle" src="https://images.jointheleague.org/module-navigation/fork_button.png">
buttons will let you *fork* the module repository. Forking a repository will
make a copy of it in your Github account so you can work on it. in your own repository.

The <img class="inline" style="vertical-align:middle" src="https://images.jointheleague.org/module-navigation/view_button.png"  >
buttons will take you to the module repository, so you can see all of the code
at once. This repository will be the *LEAGUE'S* repository, not yours, so you
can't change it, and won't see any of your changes. Visit your account to see
your version of the repository. 

If you visit one of the assignment pages, like [this one](http://localhost:8080/Level0/lessons/Module0/02_code_flow/)
you will see a  <img class="inline"  src="https://images.jointheleague.org/module-navigation/source_link.png" > link. This link will take you into the Module repositopry, to the specific
directory that has the assignment you are working on. 

## Fork a Module

Let's try it. Visit this page: 

<a href="https://league-java.github.io/Level0/lessons/Module0/" target="_blank">https://league-java.github.io/Level0/lessons/Module0/</a>

On that page, click on the <img class="inline" src="https://images.jointheleague.org/module-navigation/fork_button.png"  > button.

Then click on the green "Create a Fork" button. When the page finishes loading, you will get a page that looks like this:

<center><img class="c500" src="https://images.jointheleague.org/module-navigation/l0-m0_repo.png"></center>

## Create a Codespace

There are two ways to start working on this module. One is to copy the
repository to your local comptuter, a process called "cloning". The much
simpler way is to run the development environment on the web, using a GitHub
Codespace. 

On the repository page, click on the green "<> Code" button, after the window
pops up, click on the "Codespaces" tab. It will look like this: 

<center><img src="https://images.jointheleague.org/module-navigation/create_codespace.png" style="width: 500px;"></center>

Click on the "Create codespace on master"  button. A new tab or window will open, and
it will read that it is "Setting up your codespace". This may take a few
minutes. When it is done, you will have a Visual Studio Code window, which will look like this: 

<center><img src="https://images.jointheleague.org/module-navigation/vscode.png" width="600px"></center>

## Fork and Create Codespace in one step

You can fork and create a codespace in one step with the  <img class="inline" src="https://images.jointheleague.org/module-navigation/open_codespc.png"  > button.
Press that button and you will get this screen to configure a new codespace built from the
repo: 

<center><img style="vertical-align:middle" src="https://images.jointheleague.org/module-navigation/new_codespace_button.png" ></center>



## Look at some code

The codespace will take a few minutes to finish building, and when it is done, 
you will have a Visual Studio Code window. In the left menu, click on this icon:

<center><img src="https://images.jointheleague.org/module-navigation/files.png" width="40px"></center>

Navigate to `src/_01_demo/` and click on RobotDemo.java to view it. 

## Open a screen

The VSCode editor you are using is running on a remote server, which does not have a screen. So we have to use a virtual screen, provided by a program called VNC. This screen will appear in a pane in VSCode or browser window. Here is how you open this window. 

In the bottom pane of the VSCode window, click on the "PORTS" tab. 

<center><img src="https://images.jointheleague.org/module-navigation/ports_pane.png" width="600px"></center>

Hover over the "Forwarded Address" for port 6080. You will see a small icon
that looks like a split box with a magnifying lens Click on it. This will
open a new browser window with a "noVNC" logo. 

<center><img src="https://images.jointheleague.org/module-navigation/vscode.png" width="600px"></center>

Click on "Connect", then enter the passwod: "code4life"

Now you have a virtual screen running. When your program writes to the screen, it will show up in this window. 

::: tip

If instead of clicking on the split-box icon you instead click on the world
icon, you will get a seperate window or brrowser tab for your virtual screen.
This might work better if you have a small screen. 


:::

 ## Run the program

To run a program, click on the "Run Debug" icon in the left side menu" 

<center><img src="https://images.jointheleague.org/module-navigation/rundebug.png" width="60px"></center>

At the top of the screen you will see the "RUN AND DEBUG" menu.

<center><img src="https://images.jointheleague.org/module-navigation/run_menu_closed.png" width="300px"></center>

Click on the down arrow to open the menu. 

<center><img src="https://images.jointheleague.org/module-navigation/run_menu_open.png" width="300px"></center>

The select "RobotDemo", the program that we are viewing the source code for. Then click on the green run arrow. 


Look in the virtual window you opened earlier. You should see a robot drawing a red square. 

<center><img src="https://images.jointheleague.org/module-navigation/red_square.png" width="600px"></center>


## Find the codespace again


If you close the window with your codespace in it, you will want to find it
again later. Go back to the repository in Github and click on the green Code
button as before, then select the `Codespaces` tab. However this time you
will see something like this: 

<center><img src="https://images.jointheleague.org/module-navigation/active_codespace.png" width="600px"></center>

This is a repository with an active codespaces with crazy name, 'cautioous space halibut'. Click on one of the crazy names to open your code space, or click on the '...' for other options, such as deleting it. 


