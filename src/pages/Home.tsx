import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import { LocalNotifications } from '@capacitor/local-notifications';

import './Home.css';

const Home: React.FC = () => {

  useEffect(() => {
    LocalNotifications.registerActionTypes({
      types: [
        {
          id: 'MSG',
          actions: [
            {
              id: 'view',
              title: 'Open App'
            },
            {
              id: 'remove',
              title: `Don't open app`,
              destructive: true,
              foreground: false
            },
          ]
        }
      ]
    })
  }, [])

  const schedule = async () => {
    const granted = await LocalNotifications.requestPermissions();

    if (granted ) {
      try {
        await LocalNotifications.schedule({
          notifications: [{
            title: 'Sample Notification',
            body: 'This is a sample notification',
            id: 132,
            schedule: {
              at: new Date(Date.now() + 1000)
            },
            actionTypeId: 'MSG'
          }]
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sample Notification</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={schedule}>
            Create Reminder    
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
function UseEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}

