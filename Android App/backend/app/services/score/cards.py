from dataclasses import dataclass


@dataclass(frozen=True)
class CardBand:
    name: str
    min_score: int


CARD_BANDS = [
    CardBand("green", 0),
    CardBand("yellow", 800),
    CardBand("purple", 900),
]


def tier_for_score(score: int) -> str:
    tier = CARD_BANDS[0].name
    for band in CARD_BANDS:
        if score >= band.min_score:
            tier = band.name
    return tier


def next_band(score: int) -> CardBand | None:
    for band in CARD_BANDS:
        if score < band.min_score:
            return band
    return None

