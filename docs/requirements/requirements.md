Here's some requirements for the app.

1. Folder Structure

```
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.js
│   │   │   ├── Input.js
│   │   │   ├── Loading.js
│   │   │   └── ...
│   │   ├── story/
│   │   │   ├── StoryCard.js
│   │   │   ├── StoryPart.js
│   │   │   ├── StoryAudio.js
│   │   │   └── ...
│   │   ├── character/
│   │   │   ├── CharacterCreator.js
│   │   │   └── CharacterList.js
│   │   └── community/
│   │       ├── GroupCard.js
│   │       └── MemberList.js
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── LoginScreen.js
│   │   │   ├── RegisterScreen.js
│   │   │   └── ForgotPasswordScreen.js
│   │   ├── onboarding/
│   │   │   ├── OnboardingScreen.js
│   │   │   └── CharacterCreationScreen.js
│   │   ├── main/
│   │   │   ├── HomeScreen.js
│   │   │   ├── LibraryScreen.js
│   │   │   ├── CreateScreen.js
│   │   │   ├── CommunityScreen.js
│   │   │   └── ProfileScreen.js
│   │   └── story/
│   │       ├── StoryDetailScreen.js
│   │       ├── StoryCreationScreen.js
│   │       └── StoryPlayScreen.js
│   ├── navigation/
│   │   ├── AppNavigator.js
│   │   ├── AuthNavigator.js
│   │   ├── MainTabNavigator.js
│   │   └── OnboardingNavigator.js
│   ├── services/
│   │   ├── api/
│   │   │   ├── authApi.js
│   │   │   ├── storyApi.js
│   │   │   ├── communityApi.js
│   │   │   └── ...
│   │   ├── storage/
│   │   │   └── asyncStorage.js
│   │   ├── tts/
│   │   │   ├── elevenLabsService.js
│   │   │   └── openAiTtsService.js
│   │   └── imageGeneration/
│   │       └── textToImageService.js
│   ├── store/
│   │   ├── slices/
│   │   │   ├── authSlice.js
│   │   │   ├── storySlice.js
│   │   │   ├── userSlice.js
│   │   │   ├── communitySlice.js
│   │   │   └── uiSlice.js
│   │   ├── selectors/
│   │   │   ├── authSelectors.js
│   │   │   ├── storySelectors.js
│   │   │   └── ...
│   │   └── store.js
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useStory.js
│   │   └── ...
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── validation.js
│   ├── styles/
│   │   ├── colors.js
│   │   ├── typography.js
│   │   └── globalStyles.js
│   └── assets/
│       ├── images/
│       └── fonts/
├── App.js
├── app.json
└── package.json
```

2. Icons Pack

I am using the fontawesome icons for React Native. Here's an example of how to use them:

```
import React, { Component } from 'react'
import { View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <FontAwesomeIcon icon={faMugSaucer} />
      </View>
    )
  }
}
```

3. Database Supabase

4. Authentication
   I want to use the authentication system of Supabase. I want to have a login, register, and forgot password screen.

5. AI Integration

6. Payment Gateway

7. Design & Color Palette

Base color (soft lavender): #C3B1E1
Font color (deep indigo for high contrast): #1E0B3C
Highlight color (periwinkle blue): #7C90DB

7. Hosting
