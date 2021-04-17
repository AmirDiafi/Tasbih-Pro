import React from 'react'
import {View, Image, Text} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {Divider, Paragraph, Title} from 'react-native-paper'
import Styles from '../components/stylesheets/FadelContent'
import Header from '../components/Header'

class FadelContent extends React.Component {
  render() {
    return (
      <ScrollView>
        <Header
          isNotMain={true}
          title="Tasbih Pros"
          navigation={this.props.navigation}
        />
        <View style={Styles.container}>
          <View style={Styles.imageContainer}>
            <Image
              style={Styles.image}
              source={{
                uri:
                  'https://drive.google.com/uc?export=view&id=1izjK5Jkb0gGOZ0fWO_fLnaqCZA9vBMTh',
              }}
            />
          </View>
          <Divider />
          <Text style={Styles.title}>معنى التسبيح</Text>
          <Text style={Styles.paragraph}>
            يُقصَد بالتسبيح في اللغة: التنزيه من أيّ نَقص، وتسبيح الله -تعالى-
            هو: تنزيهُه، وتبرئته من العيوب والنقائص جميعها، والشهادة له بالكَمال
            المُطلَق؛ فالمسلم إذا حَمِد ربّه فقد أثنى عليه، وإن سبَّحَه فقد
            مَجَّده، ونفى عنه أيّ نَقص، وأكملَ بذلك حَمده، والتسبيح أحد أعظم
            الأذكار؛ قال -تعالى-: (فَسُبْحَانَ اللَّهِ حِينَ تُمْسُونَ وَحِينَ
            تُصْبِحُونَ)،[٢٦][٢٧] وللذِّكر فضل عظيم في الإسلام؛ فهو أحد الأذكار
            التي أمر الله -تعالى- بها، وهو مِمّا يتقرّب به العبد من ربّه -جلّ
            وعلا-، وقد وردت في فَضل هذا الذِّكر نصوص كثيرة في القرآن والسنّة؛
            حيث ذُكِر في أكثر من ثمانين مرّة في القرآن الكريم بصِيَغ مختلفة،
            ومنها صيغة الأمر، كما في قوله -تعالى-: (يَا أَيُّهَا الَّذِينَ
            آمَنُوا اذْكُرُوا اللهَ ذِكْراً كَثِيراً وَسَبِّحُوهُ بُكْرَةً
            وَأَصِيلاً)،[٢٨] ومنها ما ورد بصيغة الماضي، كما في قوله -تعالى-:
            (سَبَّحَ للهِ مَا فِي السَّمَوَاتِ وَمَا فِي الأَرْضِ وَهُوَ
            العَزِيزُ الحَكِيمُ)،[٢٩] وقد ورد أيضاً بصيغة المضارع، كما في قوله
            -تعالى-: (يُسَبِّحُ للهِ مَا فِي السَّمَوَاتِ وَمَا فِي
            الأَرْضِ).[٣٠][٣١]
          </Text>
          <Divider style={{margin: 10}} />
          <Text style={Styles.title}>فوائد التسبيح وفضله</Text>
          <Text style={Styles.paragraph}>
            ورد في فضائل التسبيح وأجره أنّه من أفضل الكلام، وأحبّه إلى الله
            -سبحانه وتعالى-؛ للحديث الوارد عن النبيّ -صلّى الله عليه وسلّم-؛ إذ
            قال: (أَحَبُّ الكَلامِ إلى اللهِ أرْبَعٌ: سُبْحانَ اللهِ، والْحَمْدُ
            لِلَّهِ، ولا إلَهَ إلَّا اللَّهُ، واللَّهُ أكْبَرُ)،[٥][٦] كما أنّ
            التسبيح يُعَدّ نوعاً من أنواع الصدقة التي يتصدّق بها المسلم عن كلّ
            مفصَل من مَفاصله؛ شُكراً لله -تعالى- على هذه النِّعَم الكثيرة
            العظيمة، والتي لولاها لَما استطاع الإنسان أن يتحرّك، أو أن ينجزَ
            أعماله، ويقضي حاجاته، والشُّكر في ذلك يكون بالصدقة، إلّا أنّه يصعب
            إتيان المرء بثلاثمئةٍ وستّين صدقة في اليوم؛ ولهذا جعل الله -تعالى-
            التسبيح صدقة؛ رحمة بعباده، وقد ورد ذلك في حديث النبيّ -صلّى الله
            عليه وسلّم-؛ إذ قال:(يُصْبِحُ علَى كُلِّ سُلَامَى مِن أَحَدِكُمْ
            صَدَقَةٌ، فَكُلُّ تَسْبِيحَةٍ صَدَقَةٌ)،[٧][٨] والتسبيح أحد أسباب
            مغفرة الذنوب؛[٩] قال -صلّى الله عليه وسلّم-: (مَن قالَ: سُبْحَانَ
            اللهِ وَبِحَمْدِهِ، في يَومٍ مِئَةَ مَرَّةٍ حُطَّتْ خَطَايَاهُ ولو
            كَانَتْ مِثْلَ زَبَدِ البَحْرِ).[١٠][١١]
          </Text>
          <Text style={Styles.paragraph}>
            وتسبيح المسلم بحَمد لله -تعالى- في الصباح، والمساء مئة مرّة يُوجِب
            له الخير الكثير؛ قال -صلّى الله عليه وسلّم-: (مَن قالَ حِينَ
            يُصْبِحُ وَحِينَ يُمْسِي: سُبْحَانَ اللهِ وَبِحَمْدِهِ، مِئَةَ
            مَرَّةٍ، لَمْ يَأْتِ أَحَدٌ يَومَ القِيَامَةِ، بأَفْضَلَ ممَّا جَاءَ
            به، إِلَّا أَحَدٌ قالَ مِثْلَ ما قالَ، أَوْ زَادَ عليه)،[١٢][١١]
            أمّا الأحاديث التي وردت في فضل التسبيح بعد الصلوات، فمنها قوله -صلّى
            الله عليه وسلّم-: (مَن سَبَّحَ اللَّهَ في دُبُرِ كُلِّ صَلاةٍ
            ثَلاثًا وثَلاثِينَ، وحَمِدَ اللَّهَ ثَلاثًا وثَلاثِينَ، وكَبَّرَ
            اللَّهَ ثَلاثًا وثَلاثِينَ، فَتْلِكَ تِسْعَةٌ وتِسْعُونَ، وقالَ:
            تَمامَ المِئَةِ: لا إلَهَ إلَّا اللَّهُ وحْدَهُ لا شَرِيكَ له، له
            المُلْكُ وله الحَمْدُ وهو علَى كُلِّ شيءٍ قَدِيرٌ غُفِرَتْ خَطاياهُ
            وإنْ كانَتْ مِثْلَ زَبَدِ البَحْرِ)،[١٣] بالإضافة إلى أنّ هناك بعض
            الأحاديث التي وردت في بيان فَضل التسبيح المُطلَق، ومنها قوله -عليه
            الصلاة والسلام-: (كَلِمَتانِ خَفِيفَتانِ علَى اللِّسانِ، ثَقِيلَتانِ
            في المِيزانِ، حَبِيبَتانِ إلى الرَّحْمَنِ، سُبْحانَ اللَّهِ
            وبِحَمْدِهِ، سُبْحانَ اللَّهِ العَظِيمِ).[١٤][١٥]
          </Text>
        </View>
      </ScrollView>
    )
  }
}

export default FadelContent