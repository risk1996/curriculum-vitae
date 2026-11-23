import type { ComponentProps } from "astro/types";

import type ShokumuExperience from "~/components/japanese-cv/shokumu/ShokumuExperience.astro";
import type ShokumuSkills from "~/components/japanese-cv/shokumu/ShokumuSkills.astro";

export const summary = [
  "コンピュータ工学の学士号を取得後、フィンテック企業で4 年以上勤務し、退職時にはプリンシパルソフトウェアエンジニアを務めました。TypeScript を中心に、React／React Native、Java、Spring Boot などを使用し、映画チケットのリセールWeb アプリ、クロスプラットフォームのモバイル銀行アプリ、e-KYC のバックエンドサービスなど、複数のプロジェクトに携わりました。技術設計の仕様作成、プロダクトオーナーやUI／UX担当者とのユーザー視点での詳細な議論、ソフトウェアシステムの実装まで、一連の開発工程を経験しています。",
  "その後、約1 年間日本語を学び、東京でソフトウェアエンジニアとして働く機会を得て、現在はSynspective のSolutions 部門に所属しています。Syns Analytics Platform の開発を担当し、複数の社内システムやサービスの連携、科学計算用の処理の自動化、数GB 以上のSAR 画像を処理する計算処理の速度、信頼性、監視のしやすさ、効率の改善などに取り組んでいます。主にRust とPython を使用し、GCP 上で開発・運用しています。",
  "日常の業務上のコミュニケーションは英語で行っていますが、2025 年1 月に日本語能力試験N2 に合格し、現在も夜間の日本語クラスに通い、日本語の勉強を続けています。",
];

export const synspective = {
  period: "2025 年3 月～現在",
  company: "株式会社Synspective",
  business:
    "小型SAR 衛星コンステレーションの構築・運用を通じた衛星データの取得・提供、およびAI・データ解析技術を活用したクラウド型ソリューションサービスの開発・提供",
  staff: "約200 人",
  employment: "正社員\nとして勤務",
  projects: [
    {
      period: "2025 年3 月～現在",
      title: "Syns Analytics Platform の開発",
      overview:
        "SAR リサーチエンジニアのチーム全体が実験を迅速に反復できる計算基盤を構築。カスタマーエンジニア（コンサルタントに近い役割）が顧客のニーズに合わせて解析処理を柔軟に調整できる環境を提供するとともに、解析処理を完全に自動化したパイプラインを実現した。SAR 画像のデータ取得から、顧客が容易に理解・活用できる実用的な洞察の提供までを一貫して扱う、垂直統合されたデータ解析基盤を目指した。",
      responsibilities: [
        "Kubernetes を基盤としたオンデマンド解析実行プラットフォームの開発",
        "競争力向上を目的として、解析処理のデリバリー速度およびコールドスタート時間の継続的な改善",
        "Rust を活用し、高性能かつ堅牢なシステムをゼロから設計・開発",
        "高性能マシンおよびGPU アクセラレーション対応環境の安定的な利用基盤の整備",
        "解析処理の追加・統合を自動化するためのツールおよびSDK の開発",
        "プラットフォームの保守性・診断性を高めながら、社内ユーザーが容易にダッシュボードへアクセス・利用できる環境を構築",
      ],
      achievements: [
        "物体検出・分類（ODC）解析について、処理速度、信頼性、セキュリティ強化を継続的に改善",
        "SAR 画像データのオルソ補正処理を自動化し、2026 年7 月に1 日100 件以上の実行を達成。大量処理による高速な検証環境を構築し、CEOS-ARD 認証取得に向けた改善を加速",
        "SAR 画像データを用いた洪水検出解析の統合を改善し、ユーザーが衛星撮像対象エリアのタスキング（撮像依頼）時に解析を同時にリクエストできる仕組みを実現。解析結果として、浸水状況の可視化、浸水面積、浸水した建物数を即時に確認可能な環境を提供",
      ],
      environment: [
        { label: "言語", value: "Rust, TypeScript,\nPython" },
        {
          label: "フレームワーク",
          value: "Tokio, Axum,\nSerde, SQLx,\nReact, TanStack,\nTailwind",
        },
        { label: "DB", value: "PostgreSQL" },
        { label: "API", value: "カスタムREST API" },
        { label: "その他", value: "GCP, Kubernetes,\nDocker, Pub/Sub,\nOTel" },
      ],
      team: "エンジニアのみ\n約4名",
      role: "ソフトウェア\nエンジニア\n(フルスタック、\nインフラ)",
    },
  ],
} satisfies ComponentProps<typeof ShokumuExperience>;

export const cermati = {
  period: "2019 年8 月～2024 年3 月",
  company: "PT Dwi Cermat Indonesia 社 （Cermati.com）",
  business:
    "インドネシアの人々が最適な金融商品を見つけ、賢明な財務判断を行うために、無料で数千の金融商品の情報とデータにアクセスできるサービスを提供",
  staff: "約500 人",
  employment: "正社員\nとして勤務",
  projects: [
    {
      period: "2020 年2 月～2024 年3 月",
      title: "blu by BCA Digital アプリの開発",
      overview:
        "BCA Digital が提供するクロスプラットフォームのモバイルバンキングアプリの開発プロジェクト。貯金、定期預金、送金、QRIS を使った非接触決済、バーチャルおよび物理デビットカード、外貨取引などの金融サービスを提供。",
      responsibilities: [
        "React Native およびReact エコシステムを採用し、単一コードベースによるAndroid/iOS アプリ開発体制を構築。両プラットフォーム間の機能差を抑えながら、開発速度と保守性を向上",
        "TypeScript の導入を主導し、静的型チェックによるランタイムエラー削減、大規模なコードベースにおける保守性向上、QA 工数削減を実現",
        "コードベースとチーム規模の拡大に伴い、コード構造やアーキテクチャ、垂直分離を確立",
        "ビデオ通話KYC を含む多要素認証および登録プロセスを開発",
        "プラットフォームやデバイス固有の問題、ライブラリのバグの解決",
        "新規エンジニアのオンボーディングやメンターシップを実施し、開発フローに素早く適応させる",
      ],
      achievements: [
        "伝統的な銀行プロセスを効率化し、ユーザーの採用率と満足度を大幅に向上",
        "Google Play（4.8 評価、13.4万件以上のレビュー）およびApp Store（4.8評価、5 万件以上のレビュー）でアプリをリリースし、高いユーザー評価を獲得",
        "コードベースを再構築し、インバージョン・オブ・コントロール（IoC）の手法を用いてモジュール化されたパッケージに分割することで、機能拡張とメンテナンス性を向上させ、開発サイクルの高速化を実現しました",
      ],
      environment: [
        {
          label: "言語",
          value: "TypeScript, Java,\nKotlin, Swift,\nObjective-C",
        },
        {
          label: "フレームワーク",
          value: "React Native,\nStyled System,\nRedux",
        },
        { label: "API", value: "カスタムREST API,\nFirebase" },
      ],
      team: "エンジニアのみ\n約１５名",
      role: "プリンシパル\nソフトウェア\nエンジニア\n（フロントエンド）",
    },
    {
      period: "2022 年9 月～2024 年3 月",
      title: "Cermati.com KYC センターシステムの開発",
      overview:
        "Cermati.com アプリ内金融サービスの統合ユーザー登録および承認プロセスを開発するプロジェクト。登録済みのサービスや既存のユーザーデータに基づいて、登録中に未完了の情報のみを提示する柔軟なシステムを実装。",
      responsibilities: [
        "REST API を用いたユーザー登録・社内承認プロセスのバックエンドサービス開発・保守",
        "金融商品に応じた動的フォーム生成機能の開発による登録フローの効率化",
        "ID カードOCR、法規制遵守、銀行口座確認など外部サービスとの連携",
        "テスト自動化、負荷テスト、データベース最適化による信頼性・性能向上",
      ],
      achievements: [
        "投資信託およびデジタルゴールドの登録プロセスを効率化し、ユーザー登録にかかる時間を短縮",
        "負荷テストやデータベース最適化によりシステムの信頼性とパフォーマンスを向上",
        "機密ユーザーデータを保護するため、データベースレベルでの暗号化を設計・実装",
      ],
      environment: [
        { label: "言語", value: "Java" },
        {
          label: "フレームワーク",
          value: "Spring Boot,\nReactor/Webflux,\nHibernate, Flyway",
        },
        { label: "DB", value: "PostgreSQL,\nMongoDB, Redis" },
        { label: "その他", value: "Keycloak, Grafana,\nPrometheus, GCP" },
      ],
      team: "エンジニアのみ\n全４名",
      role: "プリンシパル\nソフトウェア\nエンジニア\n（バックエンド）",
    },
    {
      period: "2019 年11 月～2020 年4 月",
      title: "BCA Lifestyle：映画チケットのリセールWeb アプリの開発",
      overview:
        "BCA のモバイルバンキングアプリ内で映画チケット購入機能を提供する新機能開発プロジェクト",
      responsibilities: [
        "ビジネス要件と高精細モックアップに基づいて、映画チケット購入システムの開発",
        "シート選択画面の開発、座席の空き状況表示、映画館のレイアウトと一致するシート配置の実装、ズーム/パン機能の実装",
        "プロダクトマネージャーやUI/UX チームと協力して実装の詳細を最終決定",
        "REST API を使用してチケット予約と購入を楽に行えるシステムを実装",
      ],
      achievements: [
        "シームレスな映画チケット購入体験を実現し、e チケットの表示機能を開発",
        "6 ヶ月以内にプロジェクトを完了し、数百万人の顧客が利用する機能を提供",
        "小さな画面向けに最適化されたタッチ操作中心のシート選択体験を実現",
      ],
      environment: [
        { label: "言語", value: "JavaScript, HTML,\nCSS/SASS" },
        { label: "フレームワーク", value: "React, Redux,\nStyled Components" },
        { label: "API", value: "カスタムREST API" },
      ],
      team: "エンジニアのみ\n約8名",
      role: "ジュニア\nソフトウェア\nエンジニア\n（フロントエンド）",
    },
  ],
} satisfies ComponentProps<typeof ShokumuExperience>;

export const frisidea = {
  period: "2018 年7 月～2019 年1 月",
  company: "Frisidea Tech 社",
  business:
    "EC・フィンテック・エンタープライズ分野を中心に、顧客の課題やニーズに応じたWeb・モバイルアプリケーションの企画、コンサルティング、設計、開発を行う",
  staff: "約50 人",
  employment: "インターン\nとして勤務",
  projects: [
    {
      period: "2018 年7 月～2019 年1 月",
      title: "学生寮管理Web システムの開発",
      overview:
        "学生寮の部屋割り当ておよび月額支払い管理を行うフルスタックWeb アプリケーションを開発。受付担当者から寮管理者まで、役割に応じた権限管理を実現するためRBAC（ロールベースアクセス制御）を導入。契約内容や支払い情報の変更には、担当者による承認フローを設けた。",
      responsibilities: [
        "Laravel を使用して学生寮管理Web システムを新規開発",
        "関係者からビジネス要件を合わせ、データベースからデザインまでの設計および実装",
        "システムの操作方法をデモンストレーションし、クライアントへのスムーズな引き渡しを実現",
      ],
      achievements: [
        "手作業によるExcel ベースのシステムを、すべての機能要件を満たす自動化されたWeb ベースのソリューションに置き換え、プロジェクトを期限内に完成しました。",
      ],
      environment: [
        { label: "言語", value: "PHP, HTML, CSS,\nBootstrap" },
        { label: "フレームワーク", value: "Laravel, jQuery" },
        { label: "DB", value: "MySQL" },
      ],
      team: "独自開発",
      role: "フルスタック開発",
    },
  ],
} satisfies ComponentProps<typeof ShokumuExperience>;

export const skills = [
  {
    category: "言語",
    skills: [
      {
        name: "Rust",
        duration: "2 年",
        description:
          "REST API サービス、TUI アプリケーション開発、Kubernetes CRD との連携",
      },
      {
        name: "TypeScript、\nJavaScript",
        duration: "5 年",
        description:
          "React/React Native を用いたWeb・クロスプラットフォームモバイルアプリ開発、tRPC・Express 等を用いたバックエンドサービス開発",
      },
      {
        name: "HTML、CSS",
        duration: "6 年",
        description:
          "レスポンシブデザイン、セマンティックHTML5、モダンなレイアウト設計・アニメーション実装",
      },
      {
        name: "Java、Kotlin",
        duration: "2 年",
        description: "Android アプリ開発、Spring Boot を用いたバックエンド開発",
      },
      {
        name: "C/C++",
        duration: "2 年",
        description: "汎用的なアルゴリズムやデータ構造の実装、TUI アプリ開発",
      },
      {
        name: "Python",
        duration: "1 年",
        description:
          "Django を用いたバックエンド開発、SDK 向けAPI クライアント開発",
      },
      {
        name: "C#",
        duration: "半年",
        description: "Unity を用いたゲーム開発（基礎レベル）",
      },
      {
        name: "PHP",
        duration: "半年",
        description:
          "Laravel・CodeIgniter を用いたバックエンド開発（基礎レベル）",
      },
    ],
  },
  {
    category: "フレーム\nワーク",
    skills: [
      {
        name: "React/NextJS",
        duration: "7 年",
        description:
          "コンポーネントライフサイクル、Hooks、関数コンポーネント、エコシステムへの深い理解",
      },
      {
        name: "React Native",
        duration: "3 年半",
        description:
          "Android/iOS 向けモバイルアプリ開発、ネイティブモジュール連携、Hermes エンジン活用",
      },
      {
        name: "Tokio、Axum",
        duration: "1 年半",
        description: "ベストプラクティスに沿ったREST API 開発",
      },
      {
        name: "Spring Boot",
        duration: "1 年半",
        description: "ベストプラクティスに沿ったREST API 開発",
      },
    ],
  },
  {
    category: "DB",
    skills: [
      {
        name: "PostgreSQL",
        duration: "4 年",
        description:
          "テーブル設計、インデックス、ビュー、複雑なJOIN、JSONB、CTE、高度なトリガーによるデータ整合性管理",
      },
      {
        name: "MySQL/MariaDB",
        duration: "1 年半",
        description: "テーブル設計、インデックス、ビュー、ENUM、制約、トリガー",
      },
      {
        name: "SQLite",
        duration: "1 年",
        description: "テーブル設計、インデックス、ビュー、中規模のJOIN 処理",
      },
    ],
  },
  {
    category: "インフラ",
    skills: [
      {
        name: "GCP",
        duration: "3 年",
        description:
          "GCS、Compute Engine、Cloud SQL、Artifact Registry、Pub/Sub、Google Kubernetes Engine、Secret Manager、IAM",
      },
      {
        name: "AWS",
        duration: "半年",
        description: "S3、Fargate、Load Balancer、Route 53、RDS",
      },
      {
        name: "Terraform",
        duration: "1 年",
        description:
          "GCP・AWS・GitHub リソースのInfrastructure as Code による管理",
      },
      { name: "GitHub Actions", duration: "1 年半" },
      {
        name: "Docker",
        duration: "2 年",
        description:
          "ステートレス／ステートフルワークロードのコンテナ化、ホストアクセラレータとの連携",
      },
      {
        name: "Kubernetes",
        duration: "1 年半",
        description: "ノード管理、無停止デプロイ、CSI ドライバー運用",
      },
      {
        name: "Firebase",
        duration: "2 年",
        description:
          "Authorization、App Distribution、Cloud Messaging、Firestore、Storage、A/B テスト",
      },
    ],
  },
  {
    category: "その他",
    skills: [
      {
        name: "Git",
        duration: "10 年",
        description:
          "Trunk-based 開発を用いた一般的なバージョン管理ワークフロー",
      },
    ],
  },
] satisfies ComponentProps<typeof ShokumuSkills>["groups"];

export const selfPromotion = [
  {
    title: "幅広いソフトウェア開発経験",
    paragraphs: [
      "Web・モバイルアプリケーションのフロントエンド開発から、バックエンドサービス開発、クラウド環境におけるシステム設計・運用まで、幅広い領域でソフトウェア開発に携わってきました。TypeScript、Rust、Python、Java／Kotlin など複数のプログラミング言語を扱い、React／React Native を用いたユーザー向けアプリケーション開発、Axum などを利用したバックエンドサービス開発、Kubernetes を活用したクラウドネイティブなシステム開発・運用の経験があります。",
      "また、Synspective では、科学計算処理の自動化や大規模なSAR（合成開口レーダー）画像処理の高速化・安定化に取り組みました。技術的な選択を行う際には、単なる技術的な優位性だけでなく、開発効率や保守性、ビジネスへの影響を考慮し、目的に適した技術選定やシステム改善を進めてきました。",
    ],
  },
  {
    title: "継続的な学習と技術力向上への姿勢",
    paragraphs: [
      "プログラミングやソフトウェアエンジニアリングは、継続的な学習と改善によって磨き続ける技術だと考えています。新しい技術や概念を積極的に学び、問題の本質を理解した上で、既存のライブラリ、設計パターン、サービスなどを適切に活用し、価値のあるソフトウェアを作ることを大切にしています。",
      "実務だけでなく、個人開発や技術カンファレンスなどを通じて知識を広げ、コンピュータサイエンスや数学などソフトウェア開発の基礎となる分野についても継続的に学んでいます。また、競技プログラミングのような問題解決にも興味を持ち、実践的な開発経験と理論的な知識の両面から技術力を高めています。",
    ],
  },
  {
    title: "日本での長期的な生活とキャリア形成",
    paragraphs: [
      "2024年より日本で生活し、現在は日本企業においてソフトウェアエンジニアとして業務に携わっています。今後も日本で長期的に生活し、これまで培ってきた技術力を活かして、日本社会や企業の発展に継続的に貢献していきたいと考えています。",
      "ソフトウェア開発を通じて、社会に価値を提供できるサービスやシステムの構築に携わることを目標としており、日本語力と技術力の両面をさらに高めながら、日本社会の一員として長期的なキャリアを築いていきたいと考えています。",
    ],
  },
];
