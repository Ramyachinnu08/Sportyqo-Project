from abc import ABC, abstractmethod
from typing import Any


class ScoringStrategy(ABC):
    @abstractmethod
    def compute(self, stats: dict[str, Any], result: str, awards: dict[str, Any]) -> int:
        raise NotImplementedError


class FootballScoringStrategy(ScoringStrategy):
    def compute(self, stats: dict[str, Any], result: str, awards: dict[str, Any]) -> int:
        points = int(stats.get("goals", 0)) * 18
        points += int(stats.get("assists", 0)) * 10
        points += int(stats.get("key_passes", 0)) * 3
        points += 12 if result == "win" else 4 if result == "draw" else 0
        if awards.get("man_of_the_match"):
            points += 15
        return points


class CricketScoringStrategy(ScoringStrategy):
    def compute(self, stats: dict[str, Any], result: str, awards: dict[str, Any]) -> int:
        points = int(stats.get("runs", 0)) // 2
        points += int(stats.get("wickets", 0)) * 15
        points += int(stats.get("catches", 0)) * 5
        points += 10 if result == "win" else 0
        if awards.get("player_of_the_match"):
            points += 15
        return points


def strategy_for_sport(sport: str) -> ScoringStrategy:
    if sport == "cricket":
        return CricketScoringStrategy()
    return FootballScoringStrategy()

