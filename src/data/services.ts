export type FaqItem = { question: string; answer: string };

export type ServiceInfo = {
  slug: string;
  href: string;
  icon: string;
  title: string;
  description: string;
  faq: FaqItem[];
};

export const SERVICES: ServiceInfo[] = [
  {
    slug: "unfair-dismissal",
    href: "/services/unfair-dismissal",
    icon: "⚖️",
    title: "부당해고·부당징계",
    description: "부당하게 해고·징계당한 근로자의 권리를 구제합니다.",
    faq: [
      {
        question: "해고 통보를 구두로만 받았는데 부당해고로 다툴 수 있나요?",
        answer:
          "근로기준법상 해고는 서면으로 통지해야 효력이 있으므로, 구두 통보만 받으셨다면 그 자체로 부당해고에 해당할 가능성이 높습니다.",
      },
      {
        question: "부당해고 구제신청은 언제까지 해야 하나요?",
        answer:
          "해고일로부터 3개월 이내에 노동위원회에 구제신청을 해야 하므로 가능한 빨리 상담받으시는 것이 좋습니다.",
      },
      {
        question: "회사가 5인 미만 사업장인데도 구제받을 수 있나요?",
        answer:
          "5인 미만 사업장은 부당해고 구제신청 대상에서 제외될 수 있으나, 사안에 따라 다른 방법으로 권리를 구제받을 수 있어 상담이 필요합니다.",
      },
    ],
  },
  {
    slug: "wage-dispute",
    href: "/services/wage-dispute",
    icon: "💰",
    title: "임금체불·퇴직금",
    description: "밀린 임금과 퇴직금을 끝까지 받아낼 수 있도록 돕습니다.",
    faq: [
      {
        question: "퇴사 후 며칠 안에 임금을 받아야 하나요?",
        answer:
          "근로기준법상 퇴직일로부터 14일 이내에 임금과 퇴직금을 지급해야 하며, 미지급 시 지연이자가 발생할 수 있습니다.",
      },
      {
        question: "회사가 폐업해서 사장님과 연락이 안 되는데 방법이 있나요?",
        answer:
          "이런 경우 국가가 대신 지급하는 체당금(대지급금) 제도를 활용할 수 있어 관련 절차를 안내해 드립니다.",
      },
      {
        question: "퇴직금은 얼마를 받을 수 있는지 계산이 어렵습니다.",
        answer:
          "평균임금과 근속연수를 기준으로 정확히 계산해 드리며, 상담을 통해 예상 수령액을 안내받으실 수 있습니다.",
      },
    ],
  },
  {
    slug: "workplace-harassment",
    href: "/services/workplace-harassment",
    icon: "🛡️",
    title: "직장 내 괴롭힘·성희롱",
    description: "직장 내 괴롭힘·성희롱 피해에 대한 신고와 대응을 지원합니다.",
    faq: [
      {
        question: "신고하면 회사에서 불이익을 줄까 봐 걱정됩니다.",
        answer:
          "법적으로 신고자에 대한 불이익 조치는 금지되어 있으며, 불이익이 발생할 경우 별도로 강력하게 대응할 수 있습니다.",
      },
      {
        question: "증거가 명확하지 않아도 신고할 수 있나요?",
        answer:
          "정황 증거나 진술만으로도 조사가 개시될 수 있으며, 증거 수집 방법에 대해서도 함께 안내해 드립니다.",
      },
      {
        question: "사내 신고와 고용노동부 신고 중 무엇이 나을까요?",
        answer:
          "상황에 따라 유리한 절차가 다르므로, 상담을 통해 가장 효과적인 대응 순서를 정하는 것이 좋습니다.",
      },
    ],
  },
  {
    slug: "industrial-accident",
    href: "/services/industrial-accident",
    icon: "🏗️",
    title: "산업재해",
    description: "산업재해 승인부터 보상까지 전 과정을 함께합니다.",
    faq: [
      {
        question: "산재 승인까지 얼마나 걸리나요?",
        answer:
          "사안에 따라 다르지만 통상 1~3개월 정도 소요되며, 복잡한 사안은 더 걸릴 수 있어 초기 대응이 중요합니다.",
      },
      {
        question: "회사가 산재 처리를 꺼려하는데 어떻게 하나요?",
        answer:
          "산재 신청은 근로자가 직접 할 수 있는 권리이며, 회사 동의 없이도 진행할 수 있도록 도와드립니다.",
      },
      {
        question: "산재로 인정되면 어떤 보상을 받을 수 있나요?",
        answer:
          "치료비, 휴업급여, 장해급여 등 상황에 맞는 보상 항목을 함께 확인하고 청구를 지원해 드립니다.",
      },
    ],
  },
  {
    slug: "labor-committee",
    href: "/services/labor-committee",
    icon: "🏛️",
    title: "노동위원회 대응",
    description: "노동위원회 심문·조정 절차에서 유리한 결과를 이끌어내도록 대리합니다.",
    faq: [
      {
        question: "노동위원회 심문회의에 혼자 나가도 되나요?",
        answer:
          "혼자 대응하실 수도 있지만, 법률적 주장을 효과적으로 준비하기 위해 대리인과 함께 준비하시는 것이 유리합니다.",
      },
      {
        question: "노동위원회에서 패소하면 더 이상 방법이 없나요?",
        answer: "중앙노동위원회 재심 신청이나 행정소송 등 추가로 진행할 수 있는 절차가 있습니다.",
      },
      {
        question: "회사 측에서 노동위원회 대응을 요청받았는데 도움 받을 수 있나요?",
        answer: "네, 사용자 측 대리도 가능하며 상황에 맞는 대응 전략을 제시해 드립니다.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceInfo | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
