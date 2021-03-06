import { Orderstypes } from './../interfaces/orderstypes';

export const clientData:Orderstypes[] = [
    {
        case:'طلب كاش العميل ماكد على المندوب والمندوب تأخر فالطلب اكتر من ساعه ونص',
        action:'YES'
    },

    {
        case:'المندوب اخطأ فى الطلب ولم ياتى بالاغراض بشكل مظبوط',
        action:'YES'
    },

    {
        case:'العميل طلب من مطعم والمندوب لقاه مغلق تعويض العميل ب 5 ريال /العميل ابلغنا ان المطعم كان مفتوح فالابلكيشن',
        action:'YES'
    },

    {
        case:'الطلب فود اونلاين و الفاتوره واضح انها في ايتم ناقص ',
        action:'YES'
    },

    {
        case:'العميل لم ياكد على المندوب فالمحادثة ومنتظر الطلب اكتر من ساعه ونص',
        action:'NO'
    },

    {
        case:'المندوب اخذ فلوس اكتر من حق الطلب من العميل',
        action:'NO'
    },

    {
        case:'المندوب اخذ فلوس زيادة لياتى بصرف',
        action:'NO'
    },

    {
        case:'العميل اكد على المندوب فالمحادثة ومنتظر الطلب اكتر من ساعه ونص',
        action:'YES'
    },
   
];


export const delegateData:Orderstypes[] = [
    {
        case:'المندوب اكد على العميل واشترى الطلب والعميل لم يستلم الطلب',
        action:'YES'
    },

    {
        case:'المندوب لم يأكد على العميل واشترى الطلب والعميل لم يستلم الطلب',
        action:'NO'
    },

    {
        case:'العميل حط اللوكيشن غلط و المندوب استلم الطلب و العنوان ابعد من الموجود في الطلب ',
        action:'YES'
    },

    {
        case: 'المندوب اكد على العميل والعميل لم يستلم ',
        action:''
    },


    {
        case: 'فى حالة المندوب تأخر اكتر عن 90 دقيقة دون ابلاغ العميل',
        action:'NO'
    },


    {
        case: 'تاخر اقل من 90 دقيقة يجب مراجعة الطلب والفاتورة والدردشة والتأكد ان العميل لم يطلب الالغاء فى الدردشة قبل شراء الطلب ',
        action:'YES'
    },


    {
        case:'العميل يريد الاستلام والدفع لاحقا ',
        action:''
    },


    {
        case:'اذا قام المندوب بتسليم الطلب ',
        action:'NO'
    },


    {
        case:'اذا لم يقم بتسليم الطلب والعميل لا يتجاوب مع الدعم الفنى ',
        action:'YES'
    },

    {
        case:'العميل لم يتوفر معه المبلغ كامل والمندوب استلم المبلغ ناقص بعد توجيه من الدعم ويريد تعويض بباقى المبلغ (wrong action)',
        action:'YES'
    },

    {
        case:'المندوب لم يتمكن من تسليم الطلب بسبب وجود العميل فى وجود منطقة عسكرية ',
        action:'YES'
    },

    {
        case:'تعويض بقيمة المشوار فى حالة ان المتجر مغلق ولم يتحدد طلبات العميل والعميل طلب الالغاء ',
        action:'NO'
    },

    {
        case:'مندوب يريد تعويض على اغراض قابلة للارجاع (مشتريات من البقاله -ملابس-مشتريات من صيدلية )',
        action:'NO'
    },

    {
        case:'مندوب يريد تعويض للدخان او بطاقات الشحن ',
        action:'NO'
    },

    {
        case:'تعويض فى حالة ان المندوب دفع مبلغ لشخص مجهول لشراء شئ من شخص مجهول او مكان غير معتمد او الاغراض من غير فاتورة ',
        action:'NO'
    },

    {
        case:'العميل لم يتجاوب او طلب الالغاء بعد ارفاق الفاتورة والمندوب يريد تعويض بقيمة الطلب ',
        action:'YES'
    },


    {
        case:'العميل لم يتجاوب او طلب الالغاء بعد ارفاق الفاتورة والمندوب يريد تعويض بقيمة الطلب ',
        action:'YES'
    },

    {
        case:'المندوب لم يلتزم بالمتجر المحدد من قبل العميل ولم يلتزم بطلبات العميل ',
        action:'NO'
    },


    {
        case:'المندوب طلب زيادة فى سعر التوصيل او رفض شراء غرض معين للعميل مما ادى الى رفض العميل الاستلام ',
        action:'NO'
    },

    {
        case:'العميل طلب الالغاء فى الدردشة والمطعم قام بالتحضير او بتسليم المندوب ',
        action:'NO'
    },

    {
        case:'الطلب وصل للعميل فاسد او منتهى الصلاحية والعميل رفض الاستلام ',
        action:'NO'
    },

]


export const restaurantData:Orderstypes[] = [
    {
        case:'طلب FOOD ONLINE المندوب استلم الطلب وسلم الى العميل والعميل لم يدفع قيمة الطلب',
        action:'YES'
    },


    {
        case:'الطلب تم الغاءه من قبل الدعم بسبب ان الطلب Fake ولم يستغرق وقت على الداش بورد والمطعم قام بتحضير الطلب ',
        action:'No'
    },

    {
        case:'المطعم حضر الطلب والمندوب لم يذهب للمطعم لاستلامة ',
        action:'YES'
    },

    {
        case:' fake order ولم يتم الغاءه من قبل الدعم الفنى والمطعم قام بتحضيره ',
        action:'YES'
    },

    {
        case:'اذا قام العميل بتحويل اى مبالغ مالية للمندوب قبل استلامه اى طلب ',
        action:'No'
    },
]