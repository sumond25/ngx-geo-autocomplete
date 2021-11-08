# Angular 12 compatible google autocomplete
[![npm version](https://badge.fury.io/js/@sumond25%2Fngx-geo-autocomplete.svg)](https://badge.fury.io/js/@sumond25%2Fngx-geo-autocomplete)
[![GitHub issues](https://img.shields.io/github/issues/sumond25/ngx-geo-autocomplete)](https://github.com/sumond25/ngx-geo-autocomplete/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/sumond25/ngx-geo-autocomplete#license)
## Demo (original version ng4)
https://tanoy009.github.io/ng4-geoautocomplete/

## Original version ng8
https://www.npmjs.com/package/ngx-geoautocomplete-v2

## Declaration
With the help of [ng8-version](https://www.npmjs.com/package/ngx-geoautocomplete-v2), I upgrade the geo-autocomplete package to the angular 12 (latest) version.

## Table of contents

- [About](#about)

- [Installation](#installation)

- [Documentation](#documentation)

- [Development](#development)

- [License](#license)

## About

angular 12 compatible google autocomplete with server side api support and AOT enabled

## Installation

Install through npm:

```

npm install --save ngx-geoautocomplete-v2

```

Then include in your apps module:

```typescript
import { Component, NgModule } from "@angular/core";

import { NgxGeoautocompleteModule } from "ngx-geoautocomplete-v2";

@NgModule({
  imports: [NgxGeoautocompleteModule.forRoot()]
})
export class MyModule {}
```

Add google place script in your main file generally referred to 'index.html' (Optional if you want to use google services).

```

<script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=true&key=XXReplace this with valid keyXX&libraries=places&language=en-US"></script>

```

Finally use in one of your apps components:

```typescript
import { Component } from "@angular/core";

@Component({
  template:
    '<ngx-geo-autocomplete [userSettings]="userSettings" (componentCallback)="autoCompleteCallback1($event)"></ngx-geo-autocomplete>'
})
export class MyComponent {
  userSettings = {};

  autoCompleteCallback1(selectedData: any) {
    //do any necessery stuff.
  }
}
```

List of settings that can be used to configure the module (all config. are optional):

```typescript

{

geoPredictionServerUrl?:  string; //should be a server url which returns list of places upon input query (GET request)

geoLatLangServiceUrl?:  string; //should be a server url which returns place object upon lat and lon. (GET request)

geoLocDetailServerUrl?:  string; //should be a server url which returns place details upon placeID received by 'geoPredictionServerUrl' (GET request)

geoCountryRestriction?:  any; //should be an array of country code where search should be restricted like ['in', 'us', 'pr', 'vi', 'gu', 'mp'] *(Default: 'no restriction')*

geoTypes?:  any; //should be an array of Place types defined by [Google api](https://developers.google.com/places/web-service/autocomplete#place_types).

geoLocation?:  any; //should be an array in the format [latitude,longitude]. This feature will not work if country restriction is implimented.

geoRadius?:  number; //should be a number and should only be used with 'geoLocation'.

serverResponseListHierarchy?:  any; //should be an array of key from where 'geoPredictionServer' data should be extracted. (see Example.)

serverResponseatLangHierarchy?:  any; //should be an array of key from where 'geoLatLangService' data should be extracted. (see Example.)

serverResponseDetailHierarchy?:  any; //should be an array of key from where 'geoLocDetailSerice' data should be extracted. (see Example.)

resOnSearchButtonClickOnly?:  boolean; //when output should be emmited when search button clicked only.

useGoogleGeoApi?:  boolean; //should set to 'false' when server urls to be used instade of google api. *(Default: true)*

inputPlaceholderText?:  string; //Input Placeholder text can be changed *(Default: 'Enter Area Name')*

inputString?:  string; //Default selected input like prefefined address. *(Default: ''). See Example 3 in Demo after 10 sec*

showSearchButton?:  boolean; //Search button to be visible or not. *(Default: true)*

showRecentSearch?:  boolean; //Recent search to be saved & shown to user or not. *(Default: true)*

showCurrentLocation?:  boolean; //current location option to be visible or not. *(Default: true)*

recentStorageName?:  string; //Recent seraches are saved in browser localsorage. The key value which is used by the module to save can be changed. *(Default: 'recentSearches')*

noOfRecentSearchSave?:  number; //Number of recent user entry to be saved . *(Default: 5)*

currentLocIconUrl?:  string; //Current location icon can be changed *(Should be an image url or svg url)*

searchIconUrl?:  string; //Search icon can be changed *(Should be an image url or svg url)*

locationIconUrl?:  string; //Genetal Location icon can be changed *(Should be an image or svg url)*

}

```

#### NOTE: Component settings can also be altered after component initialization. Please follow the below method to change.

```typescript

this.userSettings: any  = {

inputPlaceholderText: 'This is the placeholder text doring component initialization'

}



this.userSettings['inputPlaceholderText'] =  'This is the placeholder text after doing some external operation after some time';

this.userSettings  =  Object.assign({},this.userSettings) //Very Important Line to add after modifying settings.

```

#### NOTE:

'geoTypes' can be used for multiple Place Types like `['(regions)', '(cities)']` OR `['(regions)', 'establishment', 'geocode']`. This will make individual api call for each Place Types to google to fetch lists and then it will merge the resuts with uniqueness.To know avalable Place Types please refer [Google api](https://developers.google.com/places/web-service/autocomplete#place_types).USE THIS FEATURE CAREFULLY<br/><br/>

### You may also find it useful to view the [demo source](<[https://github.com/techaks/ngx-geoautocomplete-v2](https://github.com/techaks/ngx-geoautocomplete-v2)>).

### You can change the component css in the below manner (You have to set encapsulation to None)

```

import { Component, ViewEncapsulation } from '@angular/core';



@Component({

selector: 'any-component-name',

encapsulation: ViewEncapsulation.None,

template: '<div class="demo"><ng4geo-autocomplete (componentCallback)="autoCompleteCallback1($event)"></ng4geo-autocomplete></div>',

styles: ['

.demo #search_places {

height: 100px;

}

']

})

```

## Development

### Prepare your environment

- Install [Node.js](http://nodejs.org/) and NPM

- Install local dev dependencies: `npm install` while current directory is this repo

### Development server

Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing

Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release

- Bump the version in package.json (once the module hits 1.0 this will become automatic)

```bash

npm run release

```

## License

MIT
