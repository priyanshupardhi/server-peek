from django.shortcuts import render

# Create your views here.

class MonitoringView(ModelViewset):

    @action(
        details=False,
        url_path="/cpu-stats",
    )
    def cpu_stats(self, request, *args, **kwargs):
        pass

    @action(
        details=False,
        url_path="/io-stats",
    )
    def io_stats(self, request, *args, **kwargs):
        pass

    @action(
        details=False,
        url_path="/memory-stats",
    )
    def memory_stats(self, request, *args, **kwargs):
        pass

    @action(
        details=False,
        url_path="/netwokr-stats",
    )
    def network_stats(self, request, *args, **kwargs):
        pass


