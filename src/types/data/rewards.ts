interface Picture {
  image: string;
  order: number;
  type: string | null;
}

interface PointPool {
  id: string;
  type: string;
  key: string;
  metadata: any | null;
  name: string;
  images: any[];
}

interface PromoRedeemType {
  type: string;
}

interface RewardData {
  activation_description: string;
  amount: number | null;
  availability: number;
  consume_points: boolean;
  cr_points: number | null;
  cr_rank: number;
  description: string | null;
  highscore_contest: boolean;
  id: string;
  image: string;
  is_activateable: boolean | null;
  is_deactivatable: boolean | null;
  is_activated: boolean | null;
  is_active: boolean;
  throttle: Record<string, any>; // Assuming this can be any object
  time_range_redeem_count: number | null;
  contest: boolean;
  is_redeemable: boolean | null;
  limited: boolean;
  name: string;
  needed_points: number;
  needed_visits: number;
  pictures: Picture[];
  point_contest: boolean;
  ranks: number;
  redeem_count: number | null;
  redeem_description: string;
  require_shop_when_redeemed: boolean;
  show_progress_bar: boolean;
  single_use: boolean;
  shipping: boolean;
  redeem_success_alert_text: string;
  app_form: any | null;
  bounty_redeem_alert_header: string;
  bounty_redeem_alert_text: string;
  show_ranking: boolean;
  contest_type: string | null;
  bounty_activate_alert_header: string;
  bounty_activate_alert_text: string;
  can_participate: boolean | null;
  is_participating: boolean | null;
  required_status: string | null;
  instant: boolean;
  valid_from: string | null; // Date in ISO string format
  valid_until: string | null; // Date in ISO string format
  manual_claim: boolean;
  shop: string | null;
  category: string | null;
  condition_id: string | null;
  is_expired: boolean;
  point_pool: PointPool | null;
  order: number;
  terms: string | null;
  variations: Record<string, any>; // Assuming this can be any object
  promo_redeem_types: PromoRedeemType[];
  show_confirmation_dialog: string;
  reward_type: number;
  prizes: any | null;
  is_free_reward_usage_enabled: boolean;
  type: number;
}

export type {RewardData};
