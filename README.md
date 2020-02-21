# cookie-banner

A tool to easily create a banner for authorizing cookies for React.

## Installation

Run npm install --save @kevinmendes/cookie-banner

`or`

Run yarn add @kevinmendes/cookie-banner

        ```javascript

        // using ES6 Modules 

        import CookieBanner from '@kevinmendes/cookie-banner';

        //without react-router 

        function App() {
            return (
        
                <div className="App">
                    <CookieBanner day={INT} yes="STRING" info="STRING" text="STRING" link="URL" />
                </div>
            );
        }

        //with react-router 
        // Before switch for global use
        <Router >
         <div className="App">
            <CookieBanner day={INT} yes="STRING" info="STRING" text="STRING" link="URL" />
         </div>
         <Switch>
                ...
         </Switch>
        ```

## Props 

- day : must be an integer, number of day before cookies approbation expiration. // If not set banner will appear at every new session.
- yes : Text to the approval button // Required
- info :  Text to the info button // Not required, no button if you don't
- link : URL that info button have to open // not required, only use it with info button
- text : Text use in the banner area // Required

# Style : SCSS & CSS

## SCSS

import the scss file in your App.js

exemple  : 

Use the following tree

```css
#cookie_bar{
    .cookie_text {
    }
    .cookie_buttons{
        .cookie_yes {
        }
        .cookie_info {
        }
    }
}
```

```css

#cookie_bar{

    border: 1px solid gray;
    background-color: grey;
    z-index:10;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 12px 0;
    margin: 0;

    .cookie_text {
        font-style: "sans serif";
    }
    .cookie_buttons{
       text-align: right;
       padding: 1rem;
        .cookie_yes {
            border-radius:12px 0 12px 0;
            background: #d34836;
            border:none;
            color:#fff;
            font:bold 12px Verdana;
            padding:6px 0 6px 0;
            min-width: 7rem;
            min-height: 2rem;
            margin: 1rem;
        }
        .cookie_info {
            border-radius:12px 0 12px 0;
            background: #478bf9;
            border:none;
            color:#fff;
            font:bold 12px Verdana;
            padding:6px 0 6px 0;
            min-height: 2rem;
            min-width: 7rem;
            margin: 1rem;
        }
    }
}

```

## CSS

import your css in your App.js

Use the following tree

```css

#cookie_bar {
}
#cookie_bar > .cookie_text {
}
#cookie_bar > .cookie_buttons {
}
.cookie_buttons > .cookie_yes {
    }
.cookie_buttons > .cookie_info {
    }
```

exemple : 

```css
#cookie_bar {
    border: 1px solid gray;
    background-color: grey;
    z-index:10;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 12px 0;
    margin: 0;
}
#cookie_bar > .cookie_text {
    font-style: "sans serif";
}
#cookie_bar > .cookie_buttons {
    text-align: right;
    padding: 1rem;
}
.cookie_buttons > .cookie_yes {
    border-radius:12px 0 12px 0;
    background: #d34836;
    border:none;
    color:#fff;
    font:bold 12px Verdana;
    padding:6px 0 6px 0;
    min-width: 7rem;
    min-height: 2rem;
    margin: 1rem;
    }
.cookie_buttons > .cookie_info {
    border-radius:12px 0 12px 0;
    background: #478bf9;
    border:none;
    color:#fff;
    font:bold 12px Verdana;
    padding:6px 0 6px 0;
    min-height: 2rem;
    min-width: 7rem;
    margin: 1rem;
    } 

```