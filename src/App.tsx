import {
  IonApp, IonIcon, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardContent, IonAlert
} from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [dimensions, setDimensions] = useState({height: '', weight: ''});
  const [BMI, setBMI] = useState(0);
  const [cardValue, setCardValue] = useState(0);
  const [error, setError] = useState('');
  const calcBMI = () => {
    if (typeof(dimensions.height)!='number' || typeof(dimensions.weight)!='number')
    setError("Please enter number values in the fields")
    setError('')
    setCardValue(BMI)
    
  }

  const resetFields = () => {
    setDimensions({height: '', weight: ''})
  }

  useEffect(()=>{setBMI(+dimensions.weight/((+dimensions.height)*(+dimensions.height)))},[dimensions])

  return (
  <IonApp>
    <IonAlert isOpen={!!error} message={error} buttons={[{text: "Ok", handler: () => setError("")}]} />
    <IonHeader>
      <IonToolbar>
        <IonTitle>BMI Calculator</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      
      
            <IonItem>
              <IonLabel position="floating">
                WEIGHT
              </IonLabel>
              <IonInput value={dimensions.weight} onIonChange = {(e)=>{setDimensions({...dimensions, weight: e.detail.value!})}}>
              </IonInput>
            </IonItem>
          
        
            <IonItem>
              <IonLabel position="floating">
                HEIGHT
              </IonLabel>
              <IonInput value={dimensions.height} onIonChange = {(e)=>{setDimensions({...dimensions, height: e.detail.value!})}}>
              </IonInput>
            </IonItem>
         
        <IonGrid>
        <IonRow>
          <IonCol><IonButton  expand ="block" onClick={calcBMI}><IonIcon slot="start" icon={calculatorOutline} />Calculate</IonButton></IonCol>
          <IonCol><IonButton expand ="block" onClick={resetFields}><IonIcon slot="start" icon={refreshOutline} />Reset</IonButton></IonCol>
        </IonRow>  
        {
          cardValue ? (
            
              <IonCard>
                <IonCardTitle className="ion-padding"> BMI </IonCardTitle>
                <IonCardContent>{BMI}</IonCardContent>
              </IonCard>
            
          ) : null
        }
      <IonRow>
      <IonItem>
              <IonCard>
                <IonCardTitle className="ion-padding"> Please Note </IonCardTitle>
                <IonCardContent>The disadvantage of BMI is that it doesn't account for body composition. This means that if you're very lean or muscular, your BMI results may not provide an accurate picture of your general health.</IonCardContent>
              </IonCard>
      </IonItem>
      </IonRow>
        </IonGrid>
          
            
            
        
    </IonContent>
  </IonApp>
);
}

export default App;
